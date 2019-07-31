import {Customer} from './customer.model';
import {Order} from './order.model';


export class Invoice {
  id: number;
  customer: Customer;
  order: Order;
  dateInvoice: Date;

  constructor(id: number, customer: Customer, order: Order, dateInvoice: Date) {
    this.id = id;
    this.customer = customer;
    this.order = order;
    this.dateInvoice = dateInvoice;
  }
}
