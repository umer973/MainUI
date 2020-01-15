import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnExpiredComponent } from './return-expired.component';

describe('ReturnExpiredComponent', () => {
  let component: ReturnExpiredComponent;
  let fixture: ComponentFixture<ReturnExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
