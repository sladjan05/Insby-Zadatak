import { prisma } from '@/prisma/client';

export async function getSession(id: string) {
    return await prisma.session.findFirst({
        where: { id }
    });
}
