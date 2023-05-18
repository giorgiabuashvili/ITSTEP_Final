import { Injectable } from "@angular/core";
import { User } from "./User";

@Injectable()
export class UserManagement {
    private users_data: any = JSON.parse(localStorage.getItem('user_data') + "");
    private users: User[] = this.users_data;

    public CreateNewUser(user: User) {
        if (this.users == null) this.users = [];
        
        if (this.Exists(user)) return false;

        let newUser: User = user;
        let maxId: number = 0;
        this.users.forEach(user=>{
            if (maxId < user.id) maxId = user.id;
        })

        newUser.id = maxId+1;


        this.users.push(user);
        this.users_data = JSON.stringify(this.users);
        localStorage.setItem('user_data', this.users_data);

        return true;
    }

    public UpdateUser(updated: User) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (updated.id == user.id) {
                this.users[i] = updated;
                this.users_data = JSON.stringify(this.users);
                localStorage.setItem('user_data', this.users_data);
                break;
            }
        }
    }

    public IsValidUser(user: User) {
        if (!this.Exists(user)) return false;
        let userOfEmail: User | undefined = this.users.find((user_)=> { return user_.email == user.email })

        return userOfEmail?.password == user.password && userOfEmail != undefined;
    }

    public PrintUsers() {
        console.log(this.users_data);
    }

    public GetFullUser(email: string) {
        return this.users.find(u => u.email == email);
    }

    private Exists(user: User) {
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