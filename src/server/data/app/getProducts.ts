import { getSession } from '../auth/getSession';
import { InsbyApi } from '../insby/api';

export async function getProducts(data: {
    insbyToken: string;
    sessionId: string | undefined;
}) {
    const productsPromise = InsbyApi.getProducts({ token: data.insbyToken });
    const sessionPromise = data.sessionId
        ? getSession(data.sessionId)
        : undefined;

    const products = await productsPromise;
    const session = await sessionPromise;

    if (!session) {
        for (let product of products) {
            delete product.memberPrice;
        }
    }

    return products;
}
