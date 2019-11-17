import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuindasteComponent } from './guindaste.component';

describe('GuindasteComponent', () => {
  let component: GuindasteComponent;
  let fixture: ComponentFixture<GuindasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuindasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuindasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
