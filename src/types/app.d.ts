import { AuthApi } from '@/server/data/auth/api';

export type Session = NonNullable<
    Awaited<ReturnType<typeof AuthApi.getSession>>
>;
