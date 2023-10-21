'use client';

import useTimed from '@/hooks/useTimed';
import { cn } from '@/utils/cn';
import { ReactNode, createContext, useContext } from 'react';

const ToastContext = createContext({
    showToast: (message: string) => {}
});

export function useToast() {
    return useContext(ToastContext);
}

export default function ToastProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useTimed<string | null>(null);

    return (
        <>
            <ToastContext.Provider value={{ showToast: setMessage }}>
                {children}
            </ToastContext.Provider>
            <div
                className={cn(
                    'fixed left-1/2 top-4 origin-top -translate-x-1/2 scale-0 opacity-0 transition-all',
                    { 'scale-100 opacity-100': message }
                )}
            >
                <div className='flex items-center justify-center rounded-full bg-slate-600 px-10 py-3 font-bold text-white'>
                    {message}
                </div>
            </div>
        </>
    );
}
