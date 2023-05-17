export class Product {
    id!: number;
    name!: string;
    image!: string;
    rating!: number;
    quantity!: number;
    discount!: number;
    category!: Category;
    
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

export enum Category {
    fashion, electronics, shoes, skincare
}