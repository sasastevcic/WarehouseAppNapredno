import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wo-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.css']
})
export class DocumentsTableComponent implements OnInit {
  @Input() documents;
  @Output() sortChange = new EventEmitter();

  sort = "dateOfCreation";
  sortDirection = "asc";
  columns = {
    "dateOfCreation": true,
    "dateOfRecording": true,
    "transactionType": true,
    "status": true,
    "businessPartner": true,
    "businessPartnerLocation": true,
    "year": true
  };

  constructor() { }

  ngOnInit() {
  }

  changeSort(criteria) {
    if(this.sort == criteria) {
      this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
    } else {
      this.sort = criteria;
      this.sortDirection = 'asc';  
    }
    this.sortChange.emit({"sort": this.sort, "sortDirection": this.sortDirection});
  }
}