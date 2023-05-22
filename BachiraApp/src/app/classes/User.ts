import { Product } from "./Product";

export class User {
    public id: number = 0;
    public userName: string = "";
    public email: string = "";
    public password: string = "";
    public cart: Product[] = [];

    public static parse(param: { [key: string]: any }) {
        const result = new User();

        for (const key in param) {
            if (param.hasOwnProperty(key)) {
                (result as any)[key] = param[key];
            }
        }

        return result;
    }
}