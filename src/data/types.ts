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

export interface ContactInfo {
    name: string,
    website?: string,
    email?: string,
    phone?: string
}
export interface ReferenceInfo {
    questionsOn: string,
    contacts: ContactInfo[]
}

export interface ReferenceList {
    [key: string]: ReferenceInfo
}