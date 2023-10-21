import { InsbyApi } from '../insby/api';
import { createSession } from './createSession';

export async function signIn(
    email: string,
    password: string,
    data: { insbyToken: string }
) {
    const areCredentialsValid = await InsbyApi.signIn(email, password, {
        token: data.insbyToken
    });

    if (areCredentialsValid) {
        const session = await createSession(email);
        return session;
    }

    return null;
}
