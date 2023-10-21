'use client';

import { getBaseUrl } from '@/utils/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { PropsWithChildren, useState } from 'react';
import { trpc } from '../trpc/client';

export default function TrpcProvider({ children }: PropsWithChildren) {
    const [queryClient] = useState(() => new QueryClient({}));
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`
                })
            ]
        })
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    );
}
