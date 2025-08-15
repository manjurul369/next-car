import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { connectDB } from '@/helper/db'
import { User } from '@/models/user'
import mongoose from 'mongoose'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  adapter: MongoDBAdapter(mongoose.connection.client),
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB();
        
        if (account.provider === 'google') {
          // Check if user already exists
          const existingUser = await User.findOne({ 
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
              phone: '', // Will be filled later if needed
              address: '', // Will be filled later if needed
              district: '', // Will be filled later if needed
              nid: null, // Will be filled later if needed
              drivingLicense: '', // Will be filled later if needed
              password: '', // No password for Google users
            });

            await newUser.save();
          }
        }
        
        return true;
      } catch (error) {
        console.error('Error during sign in:', error);
        return false;
      }
    },
    async session({ session, token }) {
      try {
        await connectDB();
        const user = await User.findOne({ email: session.user.email });
        
        if (user) {
          session.user.id = user._id.toString();
          session.user.phone = user.phone;
          session.user.address = user.address;
          session.user.district = user.district;
          session.user.nid = user.nid;
          session.user.drivingLicense = user.drivingLicense;
          session.user.isGoogleUser = !!user.googleId;
        }
        
        return session;
      } catch (error) {
        console.error('Error in session callback:', error);
        return session;
      }
    },
  },
  pages: {
    signIn: '/auth/admin/login',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
