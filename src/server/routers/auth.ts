import { z } from 'zod';
import { AuthApi } from '../data/auth/api';
import { publicProcedure, router } from '../trpc';

export const authRouter = router({
    signIn: publicProcedure
        .input(
            z.object({
                email: z.string().email(),
                password: z.string()
            })
        )
        .mutation(
            async ({ ctx: { insbyToken }, input: { email, password } }) =>
                await AuthApi.signIn(email, password, { insbyToken })
        ),
    signUp: publicProcedure
        .input(
            z.object({
                email: z.string().email(),
                password: z.string()
            })
        )
        .mutation(
            async ({ ctx: { insbyToken }, input: { email, password } }) =>
                await AuthApi.signUp(email, password, { insbyToken })
        ),
    getSession: publicProcedure.query(({ ctx: { session } }) => session)
});
