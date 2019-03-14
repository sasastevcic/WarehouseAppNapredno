import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ArticleList } from '../model/article-list'

const baseUrl = "http://localhost:3000/api/articles";

@Injectable({
  providedIn:'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ArticleList> {
    return this.http.get(baseUrl).pipe(map(res => {
      return new ArticleList(res);
    }));
  }

}
