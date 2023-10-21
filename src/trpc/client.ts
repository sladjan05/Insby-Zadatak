'use client';

import { MainRouter } from '@/server/routers/main';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<MainRouter>({});
