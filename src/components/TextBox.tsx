'use client';

import { ElementProps } from '@/types/utils';
import { cn } from '@/utils/cn';
import { HTMLInputTypeAttribute, ReactNode } from 'react';

type TextBoxProps = {
    placeholder?: string;
    trailingIcon?: ReactNode;
    type?: HTMLInputTypeAttribute;
    disabled?: boolean;
    onValueChange?(value: string): void;
} & ElementProps<'div'>;

export default function TextBox({
    className,
    placeholder,
    trailingIcon,
    type,
    disabled,
    onValueChange,
    ...props
}: TextBoxProps) {
    return (
        <div
            className={cn(
                'relative flex h-14 w-full max-w-lg flex-row items-center gap-x-2 rounded-full border border-black px-6 py-4 text-base',
                className
            )}
            {...props}
        >
            <input
                className='peer h-full w-full bg-transparent outline-none'
                // Must NOT be empty, otherwise placeholder-shown attribute doesn't trigger
                placeholder=' '
                type={type}
                disabled={disabled}
                onChange={(e) => onValueChange?.(e.target.value)}
            />
            <span className='pointer-events-none invisible absolute left-0 top-0 h-full w-full px-6 py-4 text-gray-500 peer-placeholder-shown:visible'>
                {placeholder}
            </span>
            {trailingIcon && (
                <span className='pointer-events-none w-5 text-gray-500'>
                    {trailingIcon}
                </span>
            )}
        </div>
    );
}
