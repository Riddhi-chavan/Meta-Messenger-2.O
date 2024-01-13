"use client"
import React from 'react'
import { getProviders, useSession } from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from './SignInComponent'
import { useRouter } from 'next/navigation'

async function SignIN() {

    const { data: session } = useSession()
    const router = useRouter()

    if (session) {
        router.push('/')
        return null // You can also render a loading spinner here if needed
    }
    const providers = await getProviders()


    return (

        <div className="w-full mx-auto  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-200">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-center md:text-2xl text-white">
                    Sign in to your account
                </h1>
                <div className="space-y-4 md:space-y-6" >

                    <Image
                        className='rounded-full  mx-auto object-cover w-56 h-56 '
                        width={700}
                        height={700}
                        src="/meta.png"
                        alt='Profile Picture'

                    />
                   
                    <SignInComponent providers={providers} />
                    <p className="text-sm font-light text-gray-400">
                        Dont have an account yet? <a href="https://www.facebook.com/" target="_blank" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create one on Facebook</a>
                    </p>
                </div>
            </div>
        </div>





    )
}

export default SignIN
