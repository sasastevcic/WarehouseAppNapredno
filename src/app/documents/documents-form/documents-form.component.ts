import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { Document } from '../model/document';
import { Item } from '../model/item';
import { ItemList } from '../model/item-list';
import { Article } from '../model/article';
import { ArticleList } from '../model/article-list';
import { DocumentsService } from '../services/documents.service';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'wo-documents-form',
  templateUrl: './documents-form.component.html',
  styleUrls: ['./documents-form.component.css']
})
export class DocumentsFormComponent implements OnInit {
  document: Document;
  items: Item[];
  articles: Article[];

  constructor(
    private route: ActivatedRoute,
    private documentsService: DocumentsService,
    private articlesService: ArticlesService
    ) { }

  ngOnInit() {
    //wait for multiple http requests
    //https://www.learnrxjs.io/operators/combination/forkjoin.html
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    forkJoin([this.documentsService.get(id), this.documentsService.getItems(id), this.articlesService.getAll()])
    .subscribe(res => {
      this.document = res[0];
      this.articles = (<ArticleList>res[2]).results;
      this.items = (<ItemList>res[1]).results.map(item => {
        return this.mapArticle(item);
      });
    }, err => {
      console.log("error: " + err);
    });
  }
  
  newItem(item) {
    item.documents = this.document._id;
    this.documentsService.saveItem(item).subscribe(i => this.items.push(this.mapArticle(i)));
  }

  recordDocument(document) {
    this.documentsService.recordDocument(document).subscribe(doc => this.document = doc);
  }

  private mapArticle(item: Item): Item {
    for(let i = 0; i < this.articles.length; i++) {
      if(this.articles[i]['code'] == item.article) {
        item.article = this.articles[i]['name'];
        return item;
      }
    }
  }
}
