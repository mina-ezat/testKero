import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProdectsComponent } from './prodects/prodects.component';
import { AdminProdectsComponent } from './admin/admin-prodects/admin-prodects.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent  } from './login/login.component';
import { ShopingComponent } from './shoping/shoping.component';

const routes: Routes =
[
  {path: 'orders', component: MyOrdersComponent},
  {path: 'products', component: ProdectsComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
  {path: 'admin/prodects', component: AdminProdectsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shoping', component: ShopingComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
