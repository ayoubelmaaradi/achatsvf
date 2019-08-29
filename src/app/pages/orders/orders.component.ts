import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Customer} from '../../model/customer.model';
import {OrderService} from '../../service/order.service';
import {Order} from '../../model/order.model';
import {Vendor} from '../../model/vendor.model';
import {VendorService} from '../../service/vendor.service';
import {trigger, state, style, transition, animate, AnimationEvent} from '@angular/animations';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {Orderitem} from '../../model/orderitem.model';

@Component({
  styles: [`
        .box,
        .sample-layout > div {
            background-color: #cce4f7;
            text-align: center;
            padding-top: 1em;
            padding-bottom: 1em;
            border-radius: 4px;
        }

        .box-stretched {
            height: 100%;
        }

        .sample-layout {
            margin: 0;
        }

        .sample-layout > div {
            border: 1px solid #ffffff;
        }

        .vertical-container {
            margin: 0;
            height: 200px;
            background: #efefef;
            border-radius: 4px;
        }

        .nested-grid .p-col-4 {
            padding-bottom: 1em;
        }
    `],
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  animations: [
    trigger('animation', [
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({transform: 'translateX(50%)', opacity: 0}),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate(('250ms ease-in'), style({
          height: 0,
          opacity: 0,
          transform: 'translateX(50%)'
        }))
      ])
    ])
  ],
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  private order: Order = new Order(0, '', '', null, null, [], null, 0);
  private orderItem: Orderitem = new Orderitem(0, 0, null, null, 0);
  // private orders: Order[] = [];
  sourceOrders: Vendor[];
  // targetOrders: Vendor[];
  columns: number[];
  products: Product[] ;
  filteredProducts: any[];
  tax = 13;
  // product: Product;
  orderItems: Orderitem[];
  private fieldArray: Array<Orderitem> = [];
  private newAttribute: Orderitem = new Orderitem(0, 0, null, null, 0);

  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    // @ts-ignore
    this.newAttribute.amount = this.newAttribute.qte * this.newAttribute.product.price;
    console.log(this.newAttribute);
    // console.log(this.order);
    this.newAttribute = new Orderitem(0, 0, null, null, 0);
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  constructor(private orderService: OrderService, private vendorService: VendorService, private productService: ProductService) {
  }

  public addOrder() {
    // tslint:disable-next-line:max-line-length
   // this.orders.push(new Order(this.order.id, this.order.reference, this.order.status, this.order.dateOrdering, this.order.deliveryDate, this.order.orderItem));
    console.log(this.order);
    // tslint:disable-next-line:max-line-length
    this.orderService.createOrder(new Order(this.order.id, this.order.reference, this.order.status, this.order.dateOrdering, this.order.deliveryDate, this.order.orderItem, this.order.vendor, this.order.total)).subscribe();
  }
  ngOnInit() {
    this.vendorService.getAll().subscribe(data => {
      this.sourceOrders = data;
    });
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
   // console.log(this.sourceOrders);
    this.order.vendor = [];
    this.columns = [0];
  }
  addColumn() {
    this.columns.push(this.columns.length);
  }
  removeColumn() {
    this.columns.splice(-1, 1);
  }
  total() {
    this.order.total = 0;
    for (let i = 0; i < this.fieldArray.length; i++) {
      const total = this.fieldArray[i].amount;
      this.order.total += total;
    }
    return this.order.total;
  }
  filterBrands(event) {
    this.filteredProducts = [];
    for (let i = 0; i < this.products.length; i++) {
      const brand = this.products[i];
      // tslint:disable-next-line:triple-equals
      if (brand.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredProducts.push(brand);
      }
    }
  }
  okk() {
   this.order.orderItem = this.fieldArray;
    console.log(this.order);
  }
}
