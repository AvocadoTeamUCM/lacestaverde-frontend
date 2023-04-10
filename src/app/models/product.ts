import { Business } from "./business"

export interface Product {
    _id?: string;
    name?: string;
    price?: string;
    coin?: string;
    unit?: string;
    description?: string;
    categoryId?: string;
    businessId?: Business;
    file?: string,
}

export interface NutritionalProduct {
    cantidad?: string,
    calorias?: string,
	grasa_total?:string,
	grasa_saturada?: string,
	proteina?: string,
	sodio?: string,
	potasio?: string,
	colesterol?: string,
	carbohidratos_total?: string,
	fibras?: string,
	azucar?: string
}

export interface ProductName {
    productName?: string
}

const product : Partial<Product> = {};
const productName: Partial<ProductName> = {};
const nutritionalProduct : Partial<NutritionalProduct> = {};