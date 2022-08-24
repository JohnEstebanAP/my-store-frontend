import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../service/interface/product';
import { ProductsFashionApiService } from '../service/products-fashion/products-fashion-api.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products-fashion',
  templateUrl: './list-products-fashion.component.html',
  styleUrls: ['./list-products-fashion.component.css']
})
export class ListProductsFashionComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsFashionApiService: ProductsFashionApiService, private router: Router) {}


  ngOnInit(): void {
    this.addAllProducts();
  }

  addAllProducts() {
    this.productsFashionApiService.getAllProducts()
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
