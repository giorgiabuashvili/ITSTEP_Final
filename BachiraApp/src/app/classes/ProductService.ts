import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {}

    public async GetData(): Promise<any> {
        let response = await fetch("assets/products.json");
        let body = await response.json();
        return body;
    }


}