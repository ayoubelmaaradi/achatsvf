export class Product {
  id: number;
  reference: string;
  price: number;

  constructor(id: number, reference: string, price: number) {
    this.id = id;
    this.reference = reference;
    this.price = price;
  }
}
