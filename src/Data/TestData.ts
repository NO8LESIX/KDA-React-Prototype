import { ProductInfo, ProductList, ProductTypes} from "../Data/types";

export const TestCarrots: ProductInfo = {
        name: "Carrots",
        category: ProductTypes.Produce, 
        description: "long orange things that are vegetables",
        snap: true, 
        regulatoryRequirements: "Please, no stems. Washed", 
        relatedItems:  ["tomatoes", "rabbits"] 
} 

export const TestTomatoes: ProductInfo = {
    name: "tomatoes",
    category: ProductTypes.Produce, 
    description: "red sphere of water juice",
    snap: true,
    regulatoryRequirements: "none",
    relatedItems: ["carrots"]
}

export const CarlosItem: ProductInfo = {
    name: "Mangoes", 
    category: ProductTypes.Produce, 
    description: "The best fruit",
    snap: true, 
    regulatoryRequirements: "Please no stems. Washed", 
    relatedItems:  ["Pinappples", "Guavas"] 
} 

export const TestJams: ProductInfo = {
    name: "jams",
    category: ProductTypes.Canned,
    description: "like jelly but not",
    snap: false,
    regulatoryRequirements: "canned or jarred",
}

export const TestBread: ProductInfo = {
    name: "bread",
    category: ProductTypes.Baked, 
    description: "bread description placeholder",
    snap: true,
    regulatoryRequirements: "fully baked",
    relatedItems: ["toast", "bagels"]
}

export const TestProcessedCheese: ProductInfo = {
    name: "processed cheese",
    category: ProductTypes.Processed,
    description: "processed cheese is bad cheese",
    snap: false,
    regulatoryRequirements: "processed cheese",
    relatedItems: ["milk"]
}

export const TestProductList: ProductList = {
    "CARROTS": TestCarrots,
    "TOMATOES": TestTomatoes,
    "JAMS": TestJams,
    "BREAD": TestBread,
    "PROCESSED CHEESE": TestProcessedCheese
}