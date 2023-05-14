import { User } from "./User";

export class UserManagement {
    private static users_data: any = JSON.parse(localStorage.getItem('user_data') + "");
    private static users: User[] = this.users_data;

    public static Update(user: User) {
        if (this.users == null) this.users = [];
        
        if (this.Exists(user)) return false;

        this.users.push(user);
        this.users_data = JSON.stringify(this.users);
        localStorage.setItem('user_data', this.users_data);

        return true;
    }

    public static IsValidUser(user: User) {
        if (!this.Exists(user)) return false;
        let userOfEmail: User | undefined = this.users.find((user_)=> { return user_.email == user.email })

        return userOfEmail?.password == user.password && userOfEmail != undefined;
    }

    public static PrintUsers() {
        console.log(this.users_data);
    }

    public static GetFullUser(email: string) {
        return this.users.find(u => u.email == email);
    }

    private static Exists(user: User) {
        if (this.users == null) return false;

        for (let i = 0; i < this.users.length; i++) {
            const user_ = this.users[i];
            if (user.email == user_.email) {
                return true;
            }
        }

        return false;
    }
}