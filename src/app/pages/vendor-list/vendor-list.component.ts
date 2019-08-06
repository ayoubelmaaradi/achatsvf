import { Component, OnInit } from '@angular/core';
import {Vendor} from '../../model/vendor.model';
import {VendorService} from '../../service/vendor.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  displayDialog: boolean;
  vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', '');

  selectedVendor: Vendor;

  newCustomer: boolean;

  vendors: Vendor[];

  cols: any[];
  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.vendorService.getAll().subscribe(data => {
      this.vendors = data;
    });
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'name' },
      { field: 'type', header: 'type' },
      { field: 'adress', header: 'adress' },
      { field: 'website', header: 'website' },
      { field: 'phone', header: 'phone' },
      { field: 'mobile', header: 'mobile' },
      { field: 'fax', header: 'fax' },
      { field: 'email', header: 'email' }
    ]
  }
  showDialogToAdd() {
    this.newCustomer = true;
    this.vendor = new Vendor(0, '', '', '', '', '', '', '', '', '');
    this.displayDialog = true;
  }
  save() {
    const vendors = [...this.vendors];
    if (this.newCustomer) {
      // tslint:disable-next-line:max-line-length
      vendors.push(new Vendor(this.vendor.id, this.vendor.name, this.vendor.type, this.vendor.adress, this.vendor.website, this.vendor.phone, this.vendor.mobile, this.vendor.fax, this.vendor.email, this.vendor.language));
      // tslint:disable-next-line:max-line-length
      this.vendorService.createVendor(new Vendor(this.vendor.id, this.vendor.name, this.vendor.type, this.vendor.adress, this.vendor.website, this.vendor.phone, this.vendor.mobile, this.vendor.fax, this.vendor.email, this.vendor.language)).subscribe();
    } else {
      vendors[this.vendors.indexOf(this.selectedVendor)] = this.vendor;
      // tslint:disable-next-line:max-line-length
      this.vendorService.updateVendor(this.vendor.id, this.vendor).subscribe();
    }
    this.vendors = vendors;
    this.vendor = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.vendors.indexOf(this.selectedVendor);
    console.log(index);
    // tslint:disable-next-line:triple-equals
    this.vendors = this.vendors.filter((val, i) => i != index);
    this.vendorService.deleteVendor(this.selectedVendor.id).subscribe();
    this.vendor = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCustomer = false;
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
