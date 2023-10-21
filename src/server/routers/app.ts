import { AppApi } from '../data/app/api';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
    getProducts: publicProcedure.query(
        async ({ ctx: { insbyToken, session } }) =>
            await AppApi.getProducts({
                insbyToken: insbyToken,
                sessionId: session?.id
            })
    )
});
