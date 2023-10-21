import { z } from 'zod';
import { InsbyApiUrl } from './constants';

export async function fetchBearerToken(
    uuid: string,
    uuidOS: string = 'Windows'
) {
    const username = process.env.INSBY_API_USERNAME;
    const password = process.env.INSBY_API_PASSWORD;

    const response = await fetch(`${InsbyApiUrl}/v2/init/app`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uuid, uuidOS })
    });

    const object = await response.json();
    const token = z
        .object({
            data: z.object({
                token: z.string()
            })
        })
        .transform(({ data: { token } }) => token)
        .parse(object);

    return token;
}
