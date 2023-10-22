import { Session } from '@/types/app';
import { getCookiesFromHeader } from '@/utils/cookies';
import { initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

const t = initTRPC.context<typeof createContext>().create();

export function createContext({ req }: FetchCreateContextFnOptions) {
    const cookiesHeader = req.headers.get('Cookie');
    const cookies = getCookiesFromHeader(cookiesHeader || '');

    const insbyToken = cookies.get('InsbyToken');
    const session = cookies.get('Session');

    return {
        insbyToken: insbyToken!,
        session: session ? (JSON.parse(session) as Session) : undefined
    };
}

export const router = t.router;
export const publicProcedure = t.procedure;
