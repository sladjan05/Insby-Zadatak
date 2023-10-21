'use client';

import Button from '@/components/Button';
import Labeled from '@/components/Labeled';
import TextBox from '@/components/TextBox';
import { useToast } from '@/providers/ToastProvider';
import { trpc } from '@/trpc/client';
import { ElementProps } from '@/types/utils';
import { cn } from '@/utils/cn';
import { clientCookies } from '@/utils/cookies';
import { TRPCClientError } from '@trpc/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

type SignInFormProps = {} & ElementProps<'form'>;

export default function SignInForm({ className, ...props }: SignInFormProps) {
    const router = useRouter();
    const { showToast } = useToast();

    const { isLoading, mutate: signIn } = trpc.auth.signIn.useMutation({
        onSuccess(data) {
            if (data) {
                clientCookies.set('Session', data);
                showToast("You've been signed in!");

                router.replace('/');
                router.refresh();
            } else {
                showToast('Wrong credentials...');
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

    function handleSignIn() {
        showToast('Signing in...');

        signIn({
            email: email.current,
            password: password.current
        });
    }

    return (
        <form
            className={cn('flex flex-col items-center gap-y-16', className)}
            {...props}
        >
            <div className='flex w-full max-w-lg flex-col'>
                <h1 className='text-4xl font-bold'>Log in</h1>
            </div>
            <div className='flex w-full flex-col items-center gap-y-4'>
                <Labeled className='w-full max-w-lg' label='Email address'>
                    <TextBox
                        placeholder='Enter your email'
                        type='email'
                        disabled={isLoading}
                        onValueChange={(value) => (email.current = value)}
                    />
                </Labeled>
                <Labeled className='w-full max-w-lg' label='Password'>
                    <TextBox
                        placeholder='Enter your password'
                        type='password'
                        disabled={isLoading}
                        onValueChange={(value) => (password.current = value)}
                    />
                </Labeled>
            </div>
            <div className='flex w-full flex-col items-center gap-y-6'>
                <Button
                    className='h-16 bg-black'
                    text='Log in'
                    type='submit'
                    disabled={isLoading}
                    onClick={(event) => {
                        event.preventDefault();
                        handleSignIn();
                    }}
                />
                <span className='text-sm text-gray-500'>
                    Don{"'"}t have an account?{' '}
                    <Link className='hover:underline' href='/sign-up'>
                        Register.
                    </Link>
                </span>
            </div>
        </form>
    );
}
