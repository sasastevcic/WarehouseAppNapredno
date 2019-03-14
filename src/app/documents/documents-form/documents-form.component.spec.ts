import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsFormComponent } from './documents-form.component';

describe('DocumentsFormComponent', () => {
  let component: DocumentsFormComponent;
  let fixture: ComponentFixture<DocumentsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
