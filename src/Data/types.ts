export enum ProductTypes {
    Produce = "Fresh Produce",
    Baked = "Baked Goods",
    Processed = "Processed Goods",
    Canned = "Canned Goods",
}

export enum TestName{
    WaterActivity = "Product Water Activity",
    WaterActivityOfFilling = "Water Activity of Filling",
    WaterActivityOfIcing = "Water Activity of Icing",
    PHActivity = " Product Water Activity",
    ProductFormulation = " Product Formulation",
}

export interface ProductTesting{
    testName: TestName,
    notes: string,
    urlRedirect: string,
}

export enum ProductLicense{
    KDALicense = "Kansas Departemnt of Agriculture License"
}

export interface ProductLicenses{
    name: ProductLicense,
    description: string,
    urlRedirect: string,
}

export interface ProductInfo {
    name: string,
    category: ProductTypes,
    description: string,
    snap: boolean,
    regulatoryRequirements: string,
    requiredLicenses?: ProductLicenses[],
    productTesting?: ProductTesting[],
    relatedItems?: string[],
    imageURL?: string,
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