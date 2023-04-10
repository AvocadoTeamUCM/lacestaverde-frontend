export interface Business {
    _id?: string,
    name?: string,
    address?: string,
    description?: string,
    userId?: string,
    file?:string
}

const business : Partial<Business> = {};