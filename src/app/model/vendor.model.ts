export class Vendor {
  id: number;
  name: string;
  address: string;
  telephone: string;

  constructor(id: number, name: string, address: string, telephone: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.telephone = telephone;
  }
}
