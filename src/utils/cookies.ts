export const PERMANENT_COOKIE_TIME = 1000 * (2 ** 31 - 1);

/**
 * Used for accessing cookies client-side.
 */
export const clientCookies = {
    get(key: string) {
        return getCookiesFromHeader(document.cookie).get(key);
    },
    set(key: string, value: any, options: { expires?: number }) {
        let cookie = `${key}=${JSON.stringify(value)}`;

        if (options.expires !== undefined) {
            cookie += `;expires=${new Date(options.expires).toUTCString()}`;
        }

        document.cookie = cookie;
    }
};

/**
 * Returns cookies (key-value pair array) from `cookiesHeader` string.
 *
 * @param cookiesHeader
 * @returns array of cookies
 */
export function getCookiesFromHeader(cookiesHeader: string) {
    const cookies = new Map<string, string>();
    if (cookiesHeader === '') return cookies;

    const rawCookies = cookiesHeader.split(';');

    for (const cookie of rawCookies) {
        const [key, value] = cookie.trim().split('=');
        cookies.set(key, value);
    }

    return cookies;
}
