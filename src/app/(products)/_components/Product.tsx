import { Product } from '@/types/insby';
import { ElementProps } from '@/types/utils';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Badge from './Badge';

type ProductProps = {
    product: Product;
} & ElementProps<'div'>;

export default function Product({
    className,
    product,
    ...props
}: ProductProps) {
    return (
        <div
            className={cn(
                'flex h-80 max-w-7xl flex-row items-center gap-x-10',
                className
            )}
            {...props}
        >
            <div className='flex h-full flex-1 items-center justify-center'>
                <Image
                    className='h-full w-auto rounded-lg'
                    src={product.imageUrl}
                    alt={product.title}
                    width={150}
                    height={100}
                    priority
                />
            </div>
            <div className='flex h-full flex-1 flex-col justify-between py-6'>
                <div className='flex flex-col gap-y-4'>
                    <span className='text-3xl font-bold'>{product.title}</span>
                    <span className='text-justify text-gray-500'>
                        {product.body}
                    </span>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <Badge text={product.price.toString()} />
                    {product.memberPrice && (
                        <Badge
                            text={product.memberPrice.toString()}
                            type='member'
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
