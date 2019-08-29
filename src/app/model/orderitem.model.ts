import {Product} from './product.model';
import {Order} from './order.model';

export class Orderitem {
  id: number;
  qte: number;
  product: Product;
  amount: number;
  order: Order;
  constructor(id: number, qte: number, product: Product, order: Order, amount: number) {
    this.id = id;
    this.qte = qte;
    this.product = product;
    this.order = order;
    this.amount =  amount;
  }
}

