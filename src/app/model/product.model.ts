import {Vendor} from './vendor.model';

export class Product {
  id: number;
  reference: string;
  name: string;
  price: number;
  unitemesure: string;
  vendor: Vendor;
  description: string;

  constructor(id: number, reference: string, name: string, price: number, vendor: Vendor, unitemesure: string, description: string) {
    this.id = id;
    this.reference = reference;
    this.name = name;
    this.price = price;
    this.vendor = vendor;
    this.unitemesure = unitemesure;
    this.description = description;
  }
}
