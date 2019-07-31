import {Product} from './product.model';
import {Order} from './order.model';

export class Orderitem {
  id: number;
  qte: number;
  product: Product;
  order: Order;
  constructor(id: number, qte: number, product: Product, order: Order) {
    this.id = id;
    this.qte = qte;
    this.product = product;
    this.order = order;
  }
}

