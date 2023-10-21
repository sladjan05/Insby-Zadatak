import Navbar from '@/app/(products)/_components/Navbar';
import { createServerTRPC } from '@/trpc/server-client';
import { Metadata } from 'next';
import Product from './_components/Product';

export default async function ProductsPage() {
    const trpc = createServerTRPC();

    const productsPromise = trpc.app.getProducts();
    const sessionPromise = trpc.auth.getSession();

    const products = await productsPromise;
    const session = await sessionPromise;

    return (
        <div className='pt-24'>
            <Navbar
                className='fixed top-0 bg-white shadow-lg'
                session={session}
            />
            <div className='flex w-screen flex-col items-center gap-y-6 py-10'>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export const metadata = {
    title: 'Insby Zadatak | Products',
    description: 'List of available products.'
} satisfies Metadata;
