"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogOutButton from './LogOutButton';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';


function Header() {
    const { data: session } = useSession();
    const pathname = usePathname();
    const isSignInPage = pathname === '/auth/signin';


    console.log("session ", session);


    if (session)
        return (
            <header className='sticky top-0 z-50 bg-[#050E21]  flex justify-between items-center p-10 shadow-md '>
                <div className='flex space-x-2'>
                    <Image
                        src='/avatar.jpg'
                        alt='Profile Picture'
                        width={50}
                        height={50}
                        className='rounded-full'
                    />


                    <div>
                        <p className='text-blue-400'>Logged in as:</p>
                        <p className='font-bold text-[#f50078] text-lg'>{session.user?.name}</p>
                    </div>
                </div>
                <LogOutButton />

            </header>
        )
    return (
        <header className='sticky top-0 z-50 flex justify-center items-center p-10 shadow-sm bg-[#050E21]'>
            <div className='flex flex-col items-center space-y-5'>
                <div className='flex space-x-2 items-center'>
                    <Image src="/logo-Meta.png" height={10} width={50} alt='Logo' />

                    <p className='text-blue-400'>
                        Welcome to Meta Messenger 2.O
                    </p>
                </div>


                {!isSignInPage && (
                    <Link href='/auth/signin' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Sign In
                    </Link>
                )}
            </div>
        </header>
    )
}

export default Header
