import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlistviewComponent } from './requestlistview.component';

describe('RequestlistviewComponent', () => {
  let component: RequestlistviewComponent;
  let fixture: ComponentFixture<RequestlistviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestlistviewComponent]
    });
    fixture = TestBed.createComponent(RequestlistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
