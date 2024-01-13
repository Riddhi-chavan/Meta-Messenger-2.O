"use client";
import React from 'react'
import { getProviders } from 'next-auth/react';
import { signIn } from 'next-auth/react';

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>> | null | undefined;
};

function SignInComponent({ providers }: Props) {
  if (!providers) {
    // Handle the case when providers are still being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className='flex   justify-center'>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
          className='bg-blue-500 hover:bg-blue-700 w-96 text-white font-bold py-2 px-4 rounded'
          onClick={() => signIn(provider.id , {
            callbackUrl : process.env.VERCEL_URL || "http://localhost:3000"
          }) }>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );  
}

export default SignInComponent;