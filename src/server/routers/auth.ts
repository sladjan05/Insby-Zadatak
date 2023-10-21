import { z } from 'zod';
import { AuthApi } from '../data/auth/api';
import { publicProcedure, router } from '../trpc';

const credentialsSchema = z.object({
    email: z
        .string()
        .email('Invalid email...')
        .min(1, 'Email cannot be empty!'),
    password: z.string().min(1, 'Password cannot be empty!')
});

export const authRouter = router({
    signIn: publicProcedure
        .input(credentialsSchema)
        .mutation(
            async ({ ctx: { insbyToken }, input: { email, password } }) =>
                await AuthApi.signIn(email, password, { insbyToken })
        ),
    signUp: publicProcedure
        .input(credentialsSchema)
        .mutation(
            async ({ ctx: { insbyToken }, input: { email, password } }) =>
                await AuthApi.signUp(email, password, { insbyToken })
        ),
    getSession: publicProcedure.query(({ ctx: { session } }) => session)
});
