import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsupportviewComponent } from './requestsupportview.component';

describe('RequestsupportviewComponent', () => {
  let component: RequestsupportviewComponent;
  let fixture: ComponentFixture<RequestsupportviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestsupportviewComponent]
    });
    fixture = TestBed.createComponent(RequestsupportviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
