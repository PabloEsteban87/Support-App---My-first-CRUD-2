import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesteditionviewComponent } from './requesteditionview.component';

describe('RequesteditionviewComponent', () => {
  let component: RequesteditionviewComponent;
  let fixture: ComponentFixture<RequesteditionviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequesteditionviewComponent]
    });
    fixture = TestBed.createComponent(RequesteditionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
