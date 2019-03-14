import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsListComponent } from './documents-list/documents-list.component';
import { DocumentsFormComponent } from './documents-form/documents-form.component';
import { DocumentsTableComponent } from './documents-list/documents-table/documents-table.component';
import { PaginationComponent } from './documents-list/pagination/pagination.component';
import { DocumentPanelComponent } from './documents-form/document-panel/document-panel.component';
import { ItemListComponent } from './documents-form/item-list/item-list.component';
import { ItemFormComponent } from './documents-form/item-form/item-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    DocumentsRoutingModule
  ],
  declarations: [
    DocumentsListComponent,
    DocumentsFormComponent,
    DocumentsTableComponent,
    PaginationComponent,
    DocumentPanelComponent,
    ItemListComponent,
    ItemFormComponent
  ]
})
export class DocumentsModule { }
