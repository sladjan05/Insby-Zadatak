import { NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';
import { InsbyApi } from './server/data/insby/api';

export async function middleware(request: NextRequest) {
    const uuidCookie = request.cookies.get('UUID');
    const uuid = uuidCookie?.value || v4();

    const insbyTokenCookie = request.cookies.get('InsbyToken');
    const insbyToken =
        insbyTokenCookie?.value || (await InsbyApi.fetchBearerToken(uuid));

    // If a change occurred, write it to cookies and redirect again
    // to the same URL, so the Set-Cookie header takes effect.
    if (!insbyTokenCookie) {
        const ONE_HOUR = 1000 * 60 * 60;
        const response = NextResponse.redirect(request.url);

        response.cookies.set('UUID', uuid);
        response.cookies.set('InsbyToken', insbyToken, {
            expires: Date.now() + ONE_HOUR
        });

        return response;
    }

    return NextResponse.next();
}
