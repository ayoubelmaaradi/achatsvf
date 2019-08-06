export class Order {
  id: number;
  status: string;
  dateOrdering: string;

  constructor(id: number, status: string, dateOrdering: string) {
    this.id = id;
    this.status = status;
    this.dateOrdering = dateOrdering;
  }
}


