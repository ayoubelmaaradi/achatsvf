import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer.model';
import {OrderService} from '../../service/order.service';
import {Order} from '../../model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  private order: Order = new Order(0, '', '');
  private orders: Order[] = [];


  constructor(private orderService: OrderService) {
  }

  public addOrder() {
    this.orders.push(new Order(this.order.id, this.order.status, this.order.dateOrdering));
    console.log(this.order);
    this.orderService.createOrder(new Order(this.order.id, this.order.status, this.order.dateOrdering)).subscribe();
  }
  ngOnInit() {
  }
}
