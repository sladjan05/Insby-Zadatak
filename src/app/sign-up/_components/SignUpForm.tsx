'use client';

import Button from '@/components/Button';
import Labeled from '@/components/Labeled';
import TextBox from '@/components/TextBox';
import { useToast } from '@/providers/ToastProvider';
import { trpc } from '@/trpc/client';
import { ElementProps } from '@/types/utils';
import { cn } from '@/utils/cn';
import { TRPCClientError } from '@trpc/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

type SignUpFormProps = {} & ElementProps<'form'>;

export default function SignUpForm({ className, ...props }: SignUpFormProps) {
    const router = useRouter();
    const { showToast } = useToast();

    const { isLoading, mutate: signUp } = trpc.auth.signUp.useMutation({
        onSuccess(data) {
            if (data) {
                showToast('Account has been created.');
                router.replace('/sign-in');
            } else {
                showToast('Account already exists...');
            }
        },
        onError(error) {
            if (error instanceof TRPCClientError) {
                const message = error.message;
                const object = JSON.parse(message);

                // Check if Zod failed to validate inputs.
                // If Zod validation failed, they will be returned in an array.
                if (Array.isArray(object)) {
                    const firstElement = object[0];

                    if ('message' in firstElement) {
                        showToast(firstElement.message);
                    }
                }
            } else {
                showToast('Unknown error occurred...');
            }
        }
    });

    const email = useRef('');
    const password = useRef('');
    const confirmedPassword = useRef('');

    function handleSignUp() {
        if (password.current !== confirmedPassword.current) {
            showToast('Passwords must match!');
            return;
        }

        showToast('Signing up...');
        signUp({
            email: email.current,
            password: password.current
        });
    }

    return (
        <form
            className={cn('flex flex-col items-center gap-y-16', className)}
            {...props}
        >
            <div className='flex w-full flex-col items-center gap-y-4'>
                <h1 className='text-5xl font-bold'>Sign up</h1>
                <h2 className='text-base text-gray-500'>
                    Enter your details to get started.
                </h2>
            </div>
            <div className='flex w-full flex-col items-center gap-y-4'>
                <Labeled className='w-full max-w-lg' label='Email'>
                    <TextBox
                        placeholder='Enter your email address'
                        type='email'
                        disabled={isLoading}
                        onValueChange={(value) => (email.current = value)}
                    />
                </Labeled>
                <Labeled className='w-full max-w-lg' label='Create a password'>
                    <TextBox
                        placeholder='Enter a strong password'
                        type='password'
                        disabled={isLoading}
                        onValueChange={(value) => (password.current = value)}
                    />
                </Labeled>
                <Labeled className='w-full max-w-lg' label='Confirm password'>
                    <TextBox
                        placeholder='Confirm your password'
                        type='password'
                        disabled={isLoading}
                        onValueChange={(value) =>
                            (confirmedPassword.current = value)
                        }
                    />
                </Labeled>
            </div>
            <div className='flex w-full flex-col items-center gap-y-6'>
                <Button
                    className='bg-red-600'
                    text='Sign up'
                    type='submit'
                    disabled={isLoading}
                    onClick={(event) => {
                        event.preventDefault();
                        handleSignUp();
                    }}
                />
                <span className='text-sm text-gray-500'>
                    Already have an account?{' '}
                    <Link className='hover:underline' href='/sign-in'>
                        Log in.
                    </Link>
                </span>
            </div>
        </form>
    );
}
