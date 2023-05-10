import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "brands", component: BrandsComponent },
  { path: "pricing", component: PricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
