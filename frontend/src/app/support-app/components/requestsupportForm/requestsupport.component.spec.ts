import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsupportComponent } from './requestsupport.component';

describe('RequestsupportComponent', () => {
  let component: RequestsupportComponent;
  let fixture: ComponentFixture<RequestsupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestsupportComponent]
    });
    fixture = TestBed.createComponent(RequestsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
