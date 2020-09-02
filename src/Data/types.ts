export enum ProductTypes {
    Produce = "Fresh Produce",
    Baked = "Baked Goods",
    Processed = "Processed Goods",
    Canned = "Canned Goods",
}

export enum ProductLicenses{
    KDALicense = "Kansas Departemnt of Agriculture License"
}

export interface ProductInfo {
    name: string,
    category: ProductTypes,
    description: string,
    snap: boolean,
    regulatoryRequirements?: string,
    examples?: string[],
    requirements: string[],
    relatedItems?: string[],
    url?: string,
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

export interface UpdateInfo {
    title: string,
    preview?: string,
    description?: string,
    date?: string,
}

export interface UpdateList {
    [key: string]: UpdateInfo
}