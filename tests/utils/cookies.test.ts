import { getCookiesFromHeader } from '@/utils/cookies';
import { describe, expect, test } from '@jest/globals';

describe('getCookiesFromHeader', () => {
    test('Cookie extraction', () => {
        const cookieHeader =
            'cookie-1=value-1; cookie-2=value-2; cookie-a=value-a; cookie-b=value-b';
        const cookies = getCookiesFromHeader(cookieHeader);

        expect(cookies.get('cookie-1')).toBe('value-1');
        expect(cookies.get('cookie-2')).toBe('value-2');
        expect(cookies.get('cookie-a')).toBe('value-a');
        expect(cookies.get('cookie-b')).toBe('value-b');
    });
});
