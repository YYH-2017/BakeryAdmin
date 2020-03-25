import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";

import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductCreateComponent } from "./products/product-create/product-create.component";
import { OrderListComponent } from "./orders/order-list/order-list.component";
import { OrderUpdateComponent } from "./orders/order-update/order-update.component";


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
  { path: 'createproduct', component: ProductCreateComponent },
  { path: 'editproduct/:productId', component: ProductCreateComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'orderlist', component: OrderListComponent },
  { path: 'updateorder/:order_id', component: OrderUpdateComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}