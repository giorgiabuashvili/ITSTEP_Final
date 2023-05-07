import { User } from "./User";

export class UserManagement {
    static users_data: any = JSON.parse(localStorage.getItem('user_data') + " ");
    static users: User[] = this.users_data;

    static Update(user: User) {
        if (this.users == null)
            this.users = [];
        
        for (let i = 0; i < this.users.length; i++) {
            const user_ = this.users[i];
            if (user.email == user_.email) {
                return false;
            }
        }

        this.users.push(user);
        this.users_data = JSON.stringify(this.users);
        localStorage.setItem('user_data', this.users_data);


        return true;
        
    }

    static TEST() {
        console.log(localStorage.getItem('user_data'));
    }
}