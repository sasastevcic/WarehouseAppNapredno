import { Document } from "./document";

export class DocumentList {
  count: number;
  results: Document[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Document(elem); }) || [];
  }
}