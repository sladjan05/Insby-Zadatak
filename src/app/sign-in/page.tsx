import { Metadata } from 'next';
import Image from 'next/image';
import SignInForm from './_components/SignInForm';

export default function SignUpPage() {
    return (
        <div className='flex h-screen w-screen flex-row items-center'>
            <div className='flex h-full flex-1 items-center justify-center bg-red-600'>
                <Image
                    className='w-full max-w-lg'
                    src='/images/login_image.png'
                    alt='Log in'
                    width={2000}
                    height={1000}
                    priority
                />
            </div>
            <div className='flex flex-1 items-center justify-center'>
                <SignInForm className='w-full' />
            </div>
        </div>
    );
}

export const metadata = {
    title: 'Insby Zadatak | Log In',
    description: 'Log into your account.'
} satisfies Metadata;
