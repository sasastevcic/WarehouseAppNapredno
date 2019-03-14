import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentsListComponent } from './documents-list/documents-list.component';
import { DocumentsFormComponent } from './documents-form/documents-form.component';

const documentsRoutes: Routes = [
  {path: 'documents', component: DocumentsListComponent},
  {path: 'documents/:id', component: DocumentsFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(documentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentsRoutingModule { }
