import { Metadata } from 'next';
import Image from 'next/image';
import SignUpForm from './_components/SignUpForm';

export default function SignUpPage() {
    return (
        <div className='flex h-screen w-screen flex-row items-center'>
            <div className='flex flex-1 items-center justify-center'>
                <Image
                    className='w-full max-w-lg border border-white'
                    src='/images/signup_image.png'
                    alt='Sign Up'
                    width={2000}
                    height={1000}
                    priority
                />
            </div>
            <div className='flex flex-1 items-center justify-center'>
                <SignUpForm className='w-full' />
            </div>
        </div>
    );
}

export const metadata = {
    title: 'Insby Zadatak | Sign Up',
    description: 'Create a new account.'
} satisfies Metadata;
