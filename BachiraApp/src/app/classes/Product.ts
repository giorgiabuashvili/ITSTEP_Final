export class Product {
    id!: number;
    image!: string;
    rating!: number;
    quantity!: number;
    discount!: number;
    categories!: Category[];
    brand!: Brand;
    
    private _name!: string;
    public get name(): string {
        return this.brand + " " + this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    private _price!: number;
    public get price(): number {
        return this._price * (1-this.discount);
    }
    public set price(value: number) {
        this._price = value;
    }

    public static parse(param: { [key: string]: any }) {
        const result = new Product();

        for (const key in param) {
            if (param.hasOwnProperty(key)) {
                (result as any)[key] = param[key];
            }
        }

        return result;
    }
}

export enum Brand {
    Nike = "Nike"
    , Zara = "Zara"
    , Rolex = "Rolex"
    , Clinique = "Clinique"
}

export enum Category {
    fashion, electronics, shoes, skincare
}