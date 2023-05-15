export class Product {
    name!: string;
    image!: string;
    rating!: number;
    quantity!: number;
    discount!: number;

    private _price!: number;
    public get price(): number {
        return this._price * 1-this.discount;
    }
    public set price(value: number) {
        this._price = value;
    }
}