'use client';

import { ElementProps } from '@/types/utils';
import { cn } from '@/utils/cn';
import { HTMLInputTypeAttribute } from 'react';

type TextBoxProps = {
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    disabled?: boolean;
    onValueChange?(value: string): void;
} & ElementProps<'div'>;

export default function TextBox({
    className,
    placeholder,
    type,
    disabled,
    onValueChange,
    ...props
}: TextBoxProps) {
    return (
        <div
            className={cn(
                'relative h-14 w-full max-w-lg rounded-full border border-black text-base',
                className
            )}
            {...props}
        >
            <input
                className='peer h-full w-full bg-transparent px-6 py-4 outline-none'
                // Must NOT be empty, otherwise placeholder-shown attribute doesn't trigger
                placeholder=' '
                type={type}
                disabled={disabled}
                onChange={(e) => onValueChange?.(e.target.value)}
            />
            <span className='pointer-events-none invisible absolute left-0 top-0 h-full w-full px-6 py-4 text-gray-500 peer-placeholder-shown:visible'>
                {placeholder}
            </span>
        </div>
    );
}
