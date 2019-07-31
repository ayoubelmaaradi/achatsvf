export class Customer {
  id: number;
  name: string;
  tele: string;
  email: string;
  adress: string;
  ice: string;
  constructor(id: number, name: string, tele: string, email: string , adress: string, ice: string) {
    this.id = id;
    this.name = name;
    this.tele = tele;
    this.email = email;
    this.adress = adress;
    this.ice = ice;
  }
}
