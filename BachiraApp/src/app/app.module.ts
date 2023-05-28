import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TermsAndConditionsPageComponent } from './terms-and-conditions-page/terms-and-conditions-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PasswordPipe } from './pipes/PasswordPipe';
import { ProductService } from './classes/ProductService';
import { UserManagement } from './classes/UserManagement';
import { ProductPageComponent } from './product-page/product-page.component';
import { PurchasePageComponent } from './purchase-page/purchase-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    ErrorPageComponent,
    AboutPageComponent,
    TermsAndConditionsPageComponent,
    PrivacyPageComponent,
    UserPageComponent,
    PasswordPipe,
    ProductPageComponent,
    PurchasePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, UserManagement, UserPageComponent, CategoriesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
