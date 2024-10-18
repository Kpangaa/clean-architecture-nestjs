export class ProductNotEnabled extends Error {
    constructor(
        private readonly clientId: string,
        private readonly productId: number
    ) {
        super(`Product ${productId} is not enabled for user ${clientId}`)
    }
}