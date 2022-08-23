import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../service/interface/product';
import { ProductsFashionApiService } from '../service/products-fashion/products-fashion-api.service'; 

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products: any[] = [];

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
    localStorage.setItem('idTraining', JSON.stringify(element));
    this.router.navigate(['list/registro-postulation']);
  }
}
