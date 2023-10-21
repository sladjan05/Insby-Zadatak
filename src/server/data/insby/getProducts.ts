import { z } from 'zod';
import { InsbyApiUrl } from './constants';

const productDtoTransformSchema = z
    .object({
        id: z.number(),
        image_url: z.string().url(),
        title: z.string(),
        body: z.string(),
        prices: z.array(
            z.object({
                price: z.number(),
                member_price: z.number().optional()
            })
        )
    })
    .transform(({ id, image_url, title, body, prices }) => ({
        id: id,
        imageUrl: image_url,
        title: title,
        body: body,
        price: prices[0].price,
        memberPrice: prices[0].member_price
    }));

export async function getProducts(data: { token: string }) {
    const response = await fetch(`${InsbyApiUrl}/v2/session/product`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    });

    const object = await response.json();
    const products = z
        .object({ data: z.array(productDtoTransformSchema) })
        .transform(({ data }) => data)
        .parse(object);

    return products;
}
