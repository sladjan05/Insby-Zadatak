import { Session } from '@/types/app';
import { ElementProps } from '@/types/utils';
import { cn } from '@/utils/cn';
import Link from 'next/link';

type NavbarProps = {
    session?: Session;
} & ElementProps<'div'>;

export default function Navbar({ className, session, ...props }: NavbarProps) {
    return (
        <div
            className={cn(
                'flex h-24 w-full flex-row items-center justify-end px-10',
                className
            )}
            {...props}
        >
            <Link href='/sign-up'>
                {session && (
                    <span className='flex h-10 w-10 items-center justify-center rounded-full border-2 px-4 py-2 text-2xl text-red-600'>
                        {session.email[0].toUpperCase()}
                    </span>
                )}
                {!session && (
                    <span className='block rounded-full px-4 py-2 transition hover:scale-[102%] hover:border hover:shadow-lg'>
                        Sign Up
                    </span>
                )}
            </Link>
        </div>
    );
}
