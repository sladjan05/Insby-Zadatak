import { InsbyApiUrl } from './constants';

/**
 * Returns boolean depending on success of sign-in.
 *
 * @param email
 * @param password
 * @param data
 * @returns `true` if sign-in succeeded; `false` if sign-in failed
 */
export async function signIn(
    email: string,
    password: string,
    data: { token: string }
) {
    const response = await fetch(`${InsbyApiUrl}/session/customer-sign-in`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: email,
            password: password
        })
    });

    return response.ok;
}
