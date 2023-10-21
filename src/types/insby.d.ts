import { InsbyApi } from '@/server/data/insby/api';

export type Product = Awaited<ReturnType<typeof InsbyApi.getProducts>>[number];
