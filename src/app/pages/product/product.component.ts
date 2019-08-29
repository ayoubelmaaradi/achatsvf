import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {Vendor} from '../../model/vendor.model';
import {VendorService} from '../../service/vendor.service';
import {MessageService, SelectItem} from 'primeng/api';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-toast .ui-toast-message {
            color: #ffffff;
            background: #FC466B;
            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);
            background: linear-gradient(to right, #3F5EFB, #FC466B);
        }

        :host ::ng-deep .custom-toast .ui-toast-close-icon {
            color: #ffffff;
        }
    `],
  providers: [MessageService]
})
export class ProductComponent implements OnInit {

   displayDialog: boolean;
  private product: Product = new Product(0, '', '', 0.00, new Vendor(789456, '', '', '', '', '', '', '', '', ''), '','');
  private products: Product[];
  selectedVendor: Vendor;
  private vendors: Vendor[];
  private vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', '');
  newVendor: boolean;


  newProduct: boolean;
  cols: any[];
  cols1: any[];
  display = false;
  selectedProduct: Product;

  displayo: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  showDialog() {
    this.display = true;
  }
  constructor(private productService: ProductService, private vendorService: VendorService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
    this.sortOptions = [
      {label: 'Newest First', value: '!id'},
      {label: 'Oldest First', value: 'id'},
      {label: 'Name', value: 'name'}
    ];
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
  selectProduct(event: Event, product: Product) {
    this.selectedProduct = product;
    this.displayo = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedProduct = null;
  }

  public addProduct() {
    // tslint:disable-next-line:max-line-length
    this.products.push(new Product(this.product.id, this.product.reference, this.product.name, this.product.price, this.product.vendor, this.product.unitemesure, this.product.description));
    console.log(this.product.vendor);
    console.log(this.product);
    // tslint:disable-next-line:max-line-length
    this.productService.createProduct(new Product(this.product.id, this.product.reference, this.product.name, this.product.price, this.product.vendor, this.product.unitemesure, this.product.description)).subscribe();
    this.messageService.add({severity: 'success', summary: 'Vendor Added successfuly', detail: ''});
  }

  public addProduct1() {
    // tslint:disable-next-line:max-line-length
    this.products.push(new Product(this.product.id, this.product.reference, this.product.name, this.product.price, this.product.vendor, this.product.unitemesure, this.product.description));

    // console.log(this.product);
    // console.log(this.selectedVendor);
    // console.log(this.vendor);
    // tslint:disable-next-line:max-line-length
    this.productService.createProduct(new Product(this.product.id, this.product.reference, this.product.name, this.product.price, this.product.vendor, this.product.unitemesure, this.product.description)).subscribe();
  }

   showDialogToAdd() {
    this.newProduct = true;
    this.product = new Product(0, '', '', 0, null, '', '');
    this.displayDialog = true;
  }

  cloneVendor(c: Vendor): Vendor {
    const vendor = new Vendor(0, '', '', '', '', '', '', '', '', '');
    // tslint:disable-next-line:forin
    for (const prop in c) {
      vendor[prop] = c[prop];
    }
    return vendor;
  }
  onRowSelect(event) {
    this.newVendor = false;
    this.product.vendor = this.cloneVendor(event.data);
    this.displayDialog = true;
  }
  onSelectionChange(event) {

      this.product.vendor = event.value[0];
  }
}
