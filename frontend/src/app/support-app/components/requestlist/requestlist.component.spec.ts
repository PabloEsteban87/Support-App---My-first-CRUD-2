import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlistComponent } from './requestlist.component';

describe('RequestlistComponent', () => {
  let component: RequestlistComponent;
  let fixture: ComponentFixture<RequestlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestlistComponent]
    });
    fixture = TestBed.createComponent(RequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
