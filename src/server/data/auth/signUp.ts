import { InsbyApi } from '../insby/api';

export async function signUp(
    email: string,
    password: string,
    data: { insbyToken: string }
) {
    return InsbyApi.signUp(email, password, { token: data.insbyToken });
}
