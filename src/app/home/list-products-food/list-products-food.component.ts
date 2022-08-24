import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../service/interface/product';
import { ProductsFoodApiService } from '../service/products-food/products-food-api.service';
@Component({
  selector: 'app-list-products-food',
  templateUrl: './list-products-food.component.html',
  styleUrls: ['./list-products-food.component.css']
})
export class ListProductsFoodComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsFoodApiService: ProductsFoodApiService, private router: Router) {}


  ngOnInit(): void {
    this.addAllProducts();
  }

  addAllProducts() {
    this.productsFoodApiService.getAllProducts()
      .subscribe((getproducts) => this.products = getproducts);
  }

  startButton($event: any) {
    const element = $event.target.id;
    localStorage.setItem('idTraining', JSON.stringify(element));
    this.router.navigate(['list/registro-postulation']);
  }

}
