import { InsbyApiUrl } from './constants';

/**
 * Returns boolean depending on success of sign-up.
 *
 * @param email
 * @param password
 * @param data
 * @returns `true` if sign-up succeeded; `false` if sign-up failed
 */
export async function signUp(
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
            autoRegister: true,
            login: email,
            password: password,
            confirmPassword: password
        })
    });

    return response.ok;
}
