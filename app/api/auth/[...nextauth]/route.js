import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectDB } from '@/helper/db'
import { User } from '@/models/user'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB();
        
        if (account.provider === 'google') {
          // Check if user already exists
          let existingUser = await User.findOne({ 
            $or: [
              { email: user.email },
              { googleId: account.providerAccountId }
            ]
          });

          if (!existingUser) {
            // Create new user with Google data
            const newUser = new User({
              name: user.name,
              email: user.email,
              googleId: account.providerAccountId,
              phone: '', 
              address: '', 
              district: '', 
              nid: null, 
              drivingLicense: '', 
              password: '', // No password for Google users
            });

            existingUser = await newUser.save();
            console.log('New Google user created:', existingUser._id);
          } else {
            console.log('Existing user found:', existingUser._id);
            // Update Google ID if it doesn't exist
            if (!existingUser.googleId) {
              existingUser.googleId = account.providerAccountId;
              await existingUser.save();
            }
          }
        }
        
        return true;
      } catch (error) {
        console.error('Error during sign in:', error);
        return true; // Allow sign in even if there's a database error
      }
    },
    
    async jwt({ token, account, user }) {
      // Persist the OAuth account info in the JWT token
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
        token.providerAccountId = account.providerAccountId;
      }
      
      if (user) {
        token.id = user.id;
      }
      
      return token;
    },
    
    async session({ session, token }) {
      try {
        await connectDB();
        const dbUser = await User.findOne({ email: session.user.email });
        
        if (dbUser) {
          session.user.id = dbUser._id.toString();
          session.user.phone = dbUser.phone;
          session.user.address = dbUser.address;
          session.user.district = dbUser.district;
          session.user.nid = dbUser.nid;
          session.user.drivingLicense = dbUser.drivingLicense;
          session.user.isGoogleUser = !!dbUser.googleId;
        }
        
        return session;
      } catch (error) {
        console.error('Error in session callback:', error);
        return session;
      }
    },
    
    async redirect({ url, baseUrl }) {
      console.log('Redirect callback - url:', url, 'baseUrl:', baseUrl);
      
      // Always redirect to dashboard after successful authentication
      if (url.includes('callbackUrl')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const callbackUrl = urlParams.get('callbackUrl');
        if (callbackUrl) {
          return decodeURIComponent(callbackUrl);
        }
      }
      
      // Default redirect to dashboard
      return `${baseUrl}/auth/admin/dashboard`;
    },
  },
  pages: {
    signIn: '/auth/admin/login',
    error: '/auth/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
})

export { handler as GET, handler as POST }
