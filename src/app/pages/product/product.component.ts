import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {Vendor} from '../../model/vendor.model';
import {VendorService} from '../../service/vendor.service';
import {Observable} from 'rxjs';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayDialog: boolean;
  private product: Product = new Product(0, '', '', 0.00, new Vendor(0, '', '', '', '', '', '', '', '', ''), '');
  private products: Product[];
  selectedVendor: Vendor;
  private vendors: Vendor[];
  private vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', '');
  newVendor: boolean;

  newProduct: boolean;
  cols: any[];
  cols1: any[];
  display = false;

  showDialog() {
    this.display = true;
  }
  constructor(private productService: ProductService, private vendorService: VendorService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
    this.cols = [
      {field: 'reference', header: 'reference'},
      {field: 'name', header: 'name'},
      {field: 'price', header: 'price'},
      {field: 'unitemesure', header: 'unitemesure'},
      {field: 'vendor', header: 'vendor'},
    ];
    this.cols1 = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'name' },
      { field: 'type', header: 'type' },
      { field: 'adress', header: 'adress' },
      { field: 'website', header: 'website' },
      { field: 'phone', header: 'phone' },
      { field: 'mobile', header: 'mobile' },
      { field: 'fax', header: 'fax' },
      { field: 'email', header: 'email' }
    ];
    this.vendorService.getAll().subscribe(data => {
      this.vendors = data;
    });
  }

  public addProduct() {
    // tslint:disable-next-line:max-line-length
    this.products.push(new Product(this.product.id, this.product.reference, this.product.name, this.product.price, this.selectedVendor, this.product.unitemesure));
    console.log(this.product);
    // tslint:disable-next-line:max-line-length
    this.productService.createProduct(new Product(this.product.id, this.product.reference, this.product.name, this.product.price, this.selectedVendor, this.product.unitemesure)).subscribe();
  }

  public addProduct1() {
    // tslint:disable-next-line:max-line-length
    this.products.push(new Product(this.product.id, this.product.reference, this.product.name, this.product.price, this.product.vendor, this.product.unitemesure));
    console.log(this.product);
    // tslint:disable-next-line:max-line-length
    this.productService.createProduct(new Product(this.product.id, this.product.reference, this.product.name, this.product.price, this.product.vendor, this.product.unitemesure)).subscribe();
  }

   showDialogToAdd() {
    this.newProduct = true;
    this.product = new Product(0, '', '', 0, null, '');
    this.displayDialog = true;
  }

  cloneProduct(c: Product): Product {
    const product = new Product(0, '', '', null, null, '');
    // tslint:disable-next-line:forin
    for (const prop in c) {
      product[prop] = c[prop];
    }
    return product;
  }
  onRowSelect(event) {
    this.newVendor = false;
    this.vendor = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Vendor): Vendor {
    const vendor = new Vendor(0, '', '', '', '', '', '', '', '', '');
    // tslint:disable-next-line:forin
    for (const prop in c) {
      vendor[prop] = c[prop];
    }
    return vendor;
  }


}
