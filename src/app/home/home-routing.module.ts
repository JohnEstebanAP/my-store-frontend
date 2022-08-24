import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsCatsComponent } from './list-products-cats/list-products-cats.component';
import { ListProductsFashionComponent } from './list-products-fashion/list-products-fashion.component';
import { ListProductsFoodComponent } from './list-products-food/list-products-food.component';


const routes: Routes = [
  /*{
    path: '',
    redirectTo: "fashion",
    pathMatch: "full"
  },*/
  {
    path: "",
    children: [
      { path: "fashion", component: ListProductsFashionComponent },
      { path: "cats", component: ListProductsCatsComponent },
      { path: "food", component: ListProductsFoodComponent }
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
