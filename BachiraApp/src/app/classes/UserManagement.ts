import { Injectable } from "@angular/core";
import { User } from "./User";

@Injectable()
export class UserManagement {

    public async CreateNewUser(user: User) {
        let exists: Boolean = false;
        await this.GetUser(user).then(res=> {
            if (res != false) exists = true;
        })

        if (exists) return false;

        let createdUser: User = new User();
        await fetch('http://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "userName": user.userName,
                "firstName": "",
                "lastName": "",
                "email": user.email,
                "privateNumber": "",
                "password": user.password,
                "active": true
            })
        }).then(response => createdUser = User.parse(response), reject => console.log("account cant be created"));
        if (createdUser != new User()) return createdUser;
        return false;
    }

    public async GetUser(user: User) {
        let failed: boolean = false;
        let result: User = new User();
        await fetch('http://kketelauri-001-site1.gtempurl.com/api/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": user.email,
                "password" : user.password
            })
        }).then(response => response.json().then(response=> {
            result = User.parse(response);
        }), reject => failed = true)

        if (failed) return false;
        return result;
    }

    public async UpdateUser(user: User) {
        await fetch('http://kketelauri-001-site1.gtempurl.com/api/user/updateuser', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id" : user.id.toString(),
                "userName": user.userName,
                "firstName": "",
                "lastName": "",
                "email": user.email,
                "privateNumber": "",
                "password": user.password,
                "active": true
            })
        })
    }
}