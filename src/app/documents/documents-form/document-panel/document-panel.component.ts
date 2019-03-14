import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Document } from '../../model/document';

@Component({
  selector: 'wo-document-panel',
  templateUrl: './document-panel.component.html',
  styleUrls: ['./document-panel.component.css']
})
export class DocumentPanelComponent implements OnInit {
  @Input() document: Document;
  @Output() record = new EventEmitter<Document>();

  constructor() { }

  ngOnInit() {
  }

  recordDocument() {
    this.document.status = "recorded";
    this.document.dateOfRecording = new Date().toISOString();
    this.record.emit(this.document);
  }

}
