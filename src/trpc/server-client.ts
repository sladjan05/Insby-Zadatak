import { mainRouter } from '@/server/routers/main';
import { Session } from '@/types/app';
import { cookies } from 'next/headers';

export function createServerTRPC() {
    const cookieStore = cookies();

    const insbyTokenCookie = cookieStore.get('InsbyToken');
    const insbyToken = insbyTokenCookie?.value;

    const sessionCookie = cookieStore.get('Session');
    const session =
        sessionCookie && (JSON.parse(sessionCookie.value) as Session);

    return mainRouter.createCaller({
        insbyToken: insbyToken!,
        session: session
    });
}
