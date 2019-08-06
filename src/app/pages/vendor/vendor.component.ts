import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Vendor} from '../../model/vendor.model';
import {VendorService} from '../../service/vendor.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'
  ],
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
export class VendorComponent implements OnInit {
  private vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', '');
  private vendors: Vendor[] = [];
  types: any[];
  constructor(private vendorService: VendorService, private messageService: MessageService) {
    this.types = [
      {label: 'Company', value: 'Company'},
      {label: 'Individuel', value: 'Individuel'},
    ];
  }

  public addVendor() {
    // tslint:disable-next-line:max-line-length
    this.vendors.push(new Vendor(this.vendor.id, this.vendor.name, this.vendor.type, this.vendor.adress, this.vendor.website, this.vendor.phone, this.vendor.mobile, this.vendor.fax, this.vendor.email, this.vendor.language));
    console.log(this.vendor);
    // tslint:disable-next-line:max-line-length
    this.vendorService.createVendor(new Vendor(this.vendor.id, this.vendor.name, this.vendor.type, this.vendor.adress, this.vendor.website, this.vendor.phone, this.vendor.mobile, this.vendor.fax, this.vendor.email, this.vendor.language)).subscribe();
    this.messageService.add({severity: 'success', summary: 'Vendor Added successfuly', detail: ''});
  }
  ngOnInit() {
  }


}
