import { mainRouter } from '@/server/routers/main';
import { createContext } from '@/server/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

function handler(request: Request) {
    return fetchRequestHandler({
        endpoint: '/api/trpc',
        req: request,
        router: mainRouter,
        createContext: createContext
    });
}

export { handler as GET, handler as POST };
