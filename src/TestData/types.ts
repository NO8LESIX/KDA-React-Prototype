export enum ProductTypes {
    Produce = "Fresh Produce",
    Baked = "Baked Goods",
    Processed = "Processed Goods",
    Canned = "Canned Goods",
}


export interface ProductInfo {
    name: string,
    category: ProductTypes,
    description: string,
    snap: boolean,
    requirements?: string[],
    relatedItems?: string[],
}

export interface ProductList {
    [key: string]: ProductInfo
}