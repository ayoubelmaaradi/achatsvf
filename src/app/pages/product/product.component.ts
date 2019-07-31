import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private product: Product = new Product(0, '', 0.0);
  private products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  public addProduct() {
    this.products.push(new Product(this.product.id, this.product.reference, this.product.price));
    console.log(this.product);
    this.productService.createProduct(new Product(this.product.id, this.product.reference, this.product.price)).subscribe();
  }


  ngOnInit() {
  }

}
