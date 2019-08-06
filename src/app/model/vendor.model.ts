export class Vendor {
  id: number;
  name: string;
  type: string;
  adress: string;
  website: string;
  phone: string;
  mobile: string;
  fax: string;
  email: string;
  language: string;
  // tslint:disable-next-line:max-line-length
  constructor(id: number, name: string, type: string, adress: string, website: string, phone: string, mobile: string, fax: string, email: string, language: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.adress = adress;
    this.website = website;
    this.phone = phone;
    this.mobile = mobile;
    this.fax = fax;
    this.email = email;
    this.language = language;
  }
}
