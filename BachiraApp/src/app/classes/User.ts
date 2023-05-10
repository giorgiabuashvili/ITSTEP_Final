import { Product } from "./Product";

export class User {
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
}

enum Status {
    Admin, Member
}