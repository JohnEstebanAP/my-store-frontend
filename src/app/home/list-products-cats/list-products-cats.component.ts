import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../service/interface/product';
import { ProductsCatsApiService } from '../service/products-cats/products-cats-api.service'; 

@Component({
  selector: 'app-list-products-cats',
  templateUrl: './list-products-cats.component.html',
  styleUrls: ['./list-products-cats.component.css']
})
export class ListProductsCatsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsCatsApiService: ProductsCatsApiService, private router: Router) {}


  ngOnInit(): void {
    this.addAllProducts();
  }

  addAllProducts() {
    this.productsCatsApiService.getAllProducts()
      .subscribe((getproducts) => this.products = getproducts);
  }

  startButton($event: any) {
    const element = $event.target.id;
    localStorage.setItem('idTraining', JSON.stringify(element));
    this.router.navigate(['list/registro-postulation']);
  }

}
