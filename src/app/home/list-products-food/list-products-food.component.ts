import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../service/interface/product';
import { ProductsFoodApiService } from '../service/products-food/products-food-api.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      icon: "success",
      title: "Purchase of the product reference code: " +element,
      text: "Congratulations the product has been added to your shopping cart!",
    })
  }

}
