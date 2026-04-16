import Header from '@/components/Header'
import { getAuth } from '@/lib/better-auth/auth'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const layout = async ({children} : {children : React.ReactNode}) => {
  const shouldSkipAuthCheck = process.env.NEXT_PHASE === 'phase-production-build' || !process.env.MONGODB_URI;

  let session: Awaited<ReturnType<Awaited<ReturnType<typeof getAuth>>['api']['getSession']>> | null = null;

  if (!shouldSkipAuthCheck) {
    try {
      const auth = await getAuth();
      session = await auth.api.getSession({
        headers: await headers(),
      });
    } catch (error) {
      console.error('Failed to read session in root layout:', error);
    }
  }

  if(!shouldSkipAuthCheck && !session?.user){
    redirect('/sign-in');
  }

  const user = {
    id: session?.user?.id || 'build-user',
    name: session?.user?.name || 'Build User',
    email: session?.user?.email || 'build@example.com',
  }

  return (
    <main className='min-h-screen text-gray-400 '>
      <Header user={user}/>
        <div className='container py-10'>
            {children}
        </div>
    </main>
  )
} 

export default layout