'use client';

import { ElementProps } from '@/types/utils';
import { cn } from '@/utils/cn';

type ButtonProps = {
    text: string;
} & ElementProps<'button'>;

export default function Button({
    className,
    text,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                'h-12 w-full max-w-lg rounded-full bg-black text-base font-bold text-white transition',
                { 'hover:scale-[102%] active:scale-95': !disabled },
                className
            )}
            disabled={disabled}
            {...props}
        >
            {text}
        </button>
    );
}
