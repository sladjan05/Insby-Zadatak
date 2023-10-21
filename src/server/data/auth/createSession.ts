import { prisma } from '@/prisma/client';

export async function createSession(email: string) {
    return await prisma.session.create({
        data: { email }
    });
}
