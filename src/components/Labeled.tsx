import { ElementProps } from '@/types/utils';
import { cn } from '@/utils/cn';
import { PropsWithChildren } from 'react';

type LabeledProps = {
    label: string;
} & ElementProps<'div'>;

export default function Labeled({
    className,
    label,
    children,
    ...props
}: PropsWithChildren<LabeledProps>) {
    return (
        <div className={cn('flex flex-col gap-y-2', className)} {...props}>
            <span className='text-sm'>{label}</span>
            <span>{children}</span>
        </div>
    );
}
