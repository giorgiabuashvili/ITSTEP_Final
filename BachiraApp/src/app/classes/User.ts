import { Product } from "./Product";

export class User {
    email: string = "";
    password: string = "";
    avatar: string = "#";
    status: Status = Status.Member;
    cart: Product[] = [];
}

enum Status {
    Admin, Member
}