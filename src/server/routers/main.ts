import { router } from '../trpc';
import { appRouter } from './app';
import { authRouter } from './auth';

export const mainRouter = router({
    app: appRouter,
    auth: authRouter
});

export type MainRouter = typeof mainRouter;
