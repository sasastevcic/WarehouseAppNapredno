export class Document {
  _id: number;
  dateOfCreation: string;
  dateOfRecording: string;
  transactionType: string;
  status: string;
  year: number;
  businessPartner: Object;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.dateOfCreation = obj && obj.dateOfCreation || "";
    this.dateOfRecording = obj && obj.dateOfRecording || "";
    this.transactionType = obj && obj.transactionType || "";
    this.status = obj && obj.status || "";
    this.year = obj && obj.year || 0;
    this.businessPartner = obj && obj.businessPartner || null;
  }
}