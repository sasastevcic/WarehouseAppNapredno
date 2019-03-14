export class Item {
  _id: number;
  documents: number;
  price: number;
  quantity: number;
  article: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.documents = obj && obj.documents || null;
    this.price = obj && obj.price || 0;
    this.quantity = obj && obj.quantity || 0;
    this.article = obj && obj.article || "";
  }
}