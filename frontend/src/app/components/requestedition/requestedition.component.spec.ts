import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesteditionComponent } from './requestedition.component';

describe('RequesteditionComponent', () => {
  let component: RequesteditionComponent;
  let fixture: ComponentFixture<RequesteditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequesteditionComponent]
    });
    fixture = TestBed.createComponent(RequesteditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
