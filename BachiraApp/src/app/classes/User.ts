import { Product } from "./Product";

export class User {
    public username: string = "";
    public email: string = "";
    public password: string = "";
    public status: Status = Status.Member;
    public cart: Product[] = [];

    private _avatar: string = "#";
    public get avatar(): string {
        if (this._avatar == "#") return "assets/Images/default_profile_picture.png"

        return this._avatar;
    }
    public set avatar(value: string) {
        this._avatar = value;
    }

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

enum Status {
    Admin, Member
}