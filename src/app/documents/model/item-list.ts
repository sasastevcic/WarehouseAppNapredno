import { Item } from "./item";

export class ItemList {
  count: number;
  results: Item[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Item(elem); }) || [];
  }
}