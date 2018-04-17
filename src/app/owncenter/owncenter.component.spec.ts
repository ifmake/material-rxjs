import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwncenterComponent } from './owncenter.component';

describe('OwncenterComponent', () => {
  let component: OwncenterComponent;
  let fixture: ComponentFixture<OwncenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwncenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwncenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
