import {DBServes} from './db.serves';
// import{DbApiService} from './serves/db-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';
import {HttpModule} from '@angular/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProdectsComponent } from './prodects/prodects.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProdectsComponent } from './admin/admin-prodects/admin-prodects.component';
import { ShopingComponent } from './shoping/shoping.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProdectsComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProdectsComponent,
    ShopingComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule

  ],
  providers: [
    DBServes,
    // DbApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
