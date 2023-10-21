import ToastProvider from '@/providers/ToastProvider';
import { cn } from '@/utils/cn';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import TrpcProvider from '../providers/TrpcProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <TrpcProvider>
            <html lang='en'>
                <body
                    className={cn(
                        'relative w-screen overflow-x-hidden',
                        inter.className
                    )}
                >
                    <ToastProvider>{children}</ToastProvider>
                </body>
            </html>
        </TrpcProvider>
    );
}
