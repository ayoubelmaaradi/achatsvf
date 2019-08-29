import {Orderitem} from './orderitem.model';
import {Vendor} from './vendor.model';

export class Order {
  id: number;
  reference: string;
  status: string;
  dateOrdering: Date;
  deliveryDate: Date;
  orderItem: Orderitem[];
  vendor: Vendor[];
  total: number;



  // tslint:disable-next-line:max-line-length
  constructor(id: number, reference: string, status: string, dateOrdering: Date, deliveryDate: Date, orderItem: Orderitem[], vendor: Vendor[], total: number) {
    this.id = id;
    this.status = status;
    this.dateOrdering = dateOrdering;
    this.reference = reference;
    this.deliveryDate = deliveryDate;
    this.orderItem = orderItem;
    this.vendor = vendor;
    this.total = total;
  }
}


