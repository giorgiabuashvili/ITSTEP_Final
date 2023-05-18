import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TermsAndConditionsPageComponent } from './terms-and-conditions-page/terms-and-conditions-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "brands", component: BrandsComponent },
  { path: "about", component: AboutPageComponent },
  { path: "terms&conditions", component: TermsAndConditionsPageComponent },
  { path: "privacy", component: PrivacyPageComponent },
  { path: "user", component: UserPageComponent },
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
