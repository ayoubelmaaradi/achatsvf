import {Component, OnInit} from '@angular/core';
import {Vendor} from '../../model/vendor.model';
import {ProductService} from '../../service/product.service';
import {VendorService} from '../../service/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  private vendor: Vendor = new Vendor(0, '', '', 'XXXXXXXXXX');
  private vendors: Vendor[] = [];

  constructor(private productService: VendorService) {
  }

  public addVendor() {
    this.vendors.push(new Vendor(this.vendor.id, this.vendor.name, this.vendor.address, this.vendor.telephone));
    console.log(this.vendor);
    this.productService.createVendor(new Vendor(this.vendor.id, this.vendor.name, this.vendor.address, this.vendor.telephone)).subscribe();
  }

  ngOnInit() {
  }

}
