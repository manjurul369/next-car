"use client";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Still loading
    if (!session) router.push('/auth/admin/login'); // Not authenticated
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect to login
  }

  const handleSignOut = async () => {
    await signOut({ 
      callbackUrl: '/auth/admin/login',
      redirect: true 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {session.user.name}!</p>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* User Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-sm text-gray-900">{session.user.name || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{session.user.email || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <p className="mt-1 text-sm text-gray-900">{session.user.phone || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <p className="mt-1 text-sm text-gray-900">{session.user.address || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">District</label>
              <p className="mt-1 text-sm text-gray-900">{session.user.district || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Type</label>
              <p className="mt-1 text-sm text-gray-900">
                {session.user.isGoogleUser ? 'Google Account' : 'Regular Account'}
              </p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-800">
                {session.user.isGoogleUser ? 
                  'Successfully signed in with Google! Your account has been created.' :
                  'Successfully logged in to your account!'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
