import { ElementProps } from '@/types/utils';
import { cn } from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';

const variants = cva('', {
    variants: {
        type: {
            public: 'bg-black',
            member: 'bg-red-600'
        }
    },
    defaultVariants: {
        type: 'public'
    }
});

type BadgeProps = {
    text: string;
} & ElementProps<'span'> &
    VariantProps<typeof variants>;

export default function Badge({ className, text, type, ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                'flex min-w-[8rem] items-center justify-center rounded-full px-12 py-3 text-lg text-white',
                variants({ type }),
                className
            )}
            {...props}
        >
            {text}
        </span>
    );
}
