import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DocumentList } from '../model/document-list';
import { Document } from '../model/document';
import { ItemList } from '../model/item-list';
import { Item } from '../model/item';

const baseUrl = "http://localhost:3000/api/documents";

@Injectable({
  providedIn:'root'
})
export class DocumentsService {
  constructor(private http: HttpClient) {}

  getAll(params?: any): Observable<DocumentList> {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams()
          .set("pageSize", params.pageSize && params.pageSize.toString() || '1')
          .set("page", params.page && params.page.toString() || '5')
          .set("sort", params.sort && params.sort.toString() || '')
          .set("sortDirection", params.sortDirection && params.sortDirection.toString() || '')
      }
    }

    return this.http.get(baseUrl, queryParams).pipe(map(res => {
      return new DocumentList(res);
    }));
  }

  get(id: number): Observable<Document> {
    return this.http.get(baseUrl + "/" + id).pipe(map(res => {
      return new Document(res);
    }));
  }

  recordDocument(document: Document): Observable<Document> {
    return this.http.put(baseUrl + "/" + document._id, document).pipe(map(res => {
      return new Document(res);
    }));
  }

  getItems(id: number): Observable<ItemList> {
   return this.http.get(baseUrl + "/" + id + "/items").pipe(map(res => {
      return new ItemList(res);
    })); 
  }

  saveItem(item: Item): Observable<Item> {
    return this.http.post(baseUrl + "/" + item.documents + "/items", item).pipe(map(res => {
      return new Item(res);
    }));
  }

}
