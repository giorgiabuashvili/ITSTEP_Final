//import { HttpClient } from "@angular/common/http";
import { ReadPropExpr } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Brand, Category, Product } from "./Product";

@Injectable()
export class ProductService {
    // constructor(private http: HttpClient) {}
    public async GetData(): Promise<any> {
        let response = await fetch("assets/products.json");
        let body = await response.json();
        return body;
    }

    public async GetProductById(id: number): Promise<any> {
        let products:[] = [];
        await this.GetData().then(res=> {
            products = res['products'] as [];
        })

        return products.find(prod=> prod['id'] == id);
    }

    public async GetProductsByName(name: string): Promise<any> {
        let products: [] = [];
        await this.GetData().then(res=> {
            products = res['products'] as [];
        })

        return products.filter(prod=> prod['name'] == name);
    }

    public async GetProductsByFilter(filter: Filter): Promise<any> {
        let products: Product[] = [];
        await this.GetData().then(res=> {
            let temp = res['products'] as [];
            
            temp.forEach(prod=> {
                products.push(Product.parse(prod));
            })
        })

        return products.filter(prod => {
            if (filter.name != "" && filter.name != prod.name) return false;
            if (filter.id != -1 && filter.id != prod.id) return false;
            if (filter.min_price != -1 && filter.min_price > prod.price) return false;
            if (filter.max_price != -1 && filter.max_price < prod.price) return false;
            if (filter.min_rating != -1 && filter.min_rating > prod.rating) return false;
            if (filter.is_in_stock != true && prod.quantity <= 0) return false;
            if (filter.categories.length > 0 && !filter.categories.every(val=>prod.categories.includes(val))) return false;
            if (filter.brands.length > 0 && !filter.brands.every(val=>prod.brand.includes(val))) return false;

            return true;
        })
    }
}

export class Filter {
    name:string = "";
    id:number = -1;
    min_price: number = -1;
    max_price: number = -1;
    min_rating: number = -1;
    is_in_stock: boolean = true;
    categories: Category[] = [];
    brands: Brand[] = [];

    public static parse(param: { [key: string]: any }) {
        const result = new Filter();

        for (const key in param) {
            if (param.hasOwnProperty(key)) {
                (result as any)[key] = param[key];
            }
        }

        return result;
    }
}