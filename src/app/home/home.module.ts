import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from '../app-routing.module';
import { HomeRoutingModule } from './home-routing.module';
import { ListProductsCatsComponent } from './list-products-cats/list-products-cats.component';
import { ListProductsFoodComponent } from './list-products-food/list-products-food.component';
import { ListProductsFashionComponent } from './list-products-fashion/list-products-fashion.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ListProductsCatsComponent,
    ListProductsFoodComponent,
    ListProductsFashionComponent
  ],
  imports: [
    CommonModule,   
    HttpClientModule,
    HomeRoutingModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class HomeModule { }