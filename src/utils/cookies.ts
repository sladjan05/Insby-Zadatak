/**
 * Used for accessing cookies client-side.
 */
export const clientCookies = {
    get(key: string) {
        return getCookiesFromHeader(document.cookie).get(key);
    },
    set(key: string, value: any) {
        document.cookie = `${key}=${JSON.stringify(value)}`;
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
