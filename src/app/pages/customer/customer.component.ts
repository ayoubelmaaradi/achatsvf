import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  private customer: Customer = new Customer(0, '', '', '', '', '');
  private customers: Customer[] = [];
  constructor(private customerService: CustomerService) {
  }
  public addCustomer() {
    this.customers.push(new Customer(this.customer.id, this.customer.name, this.customer.tele, this.customer.email,
      this.customer.adress, this.customer.ice));
    console.log(this.customer);
    this.customerService.createCustomer(new Customer(this.customer.id, this.customer.name, this.customer.tele,
      this.customer.email, this.customer.adress, this.customer.ice)).subscribe();
  }
  ngOnInit() {
  }

}
