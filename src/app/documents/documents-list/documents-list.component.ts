import { Component, OnInit } from '@angular/core';

import { DocumentsService } from '../services/documents.service';
import { DocumentList } from '../model/document-list';

@Component({
  selector: 'wo-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {
  documents: DocumentList;
  params = {
    page: 1,
    pageSize: 10,
    sort: 'dateOfCreation',
    sortDirection: 'asc'
  };

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.updateDocuments();
  }

  updateDocuments(params?: any) {
    if(params) {
      this.params.pageSize = params.pageSize || this.params.pageSize;
      this.params.page = params.page || this.params.page;
      this.params.sort = params.sort || this.params.sort;
      this.params.sortDirection = params.sortDirection || this.params.sortDirection;
    }
    this.documentsService.getAll(this.params).subscribe(res => this.documents = res)
  }

}
