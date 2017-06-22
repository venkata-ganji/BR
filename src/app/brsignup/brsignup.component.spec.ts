import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrsignupComponent } from './brsignup.component';

describe('BrsignupComponent', () => {
  let component: BrsignupComponent;
  let fixture: ComponentFixture<BrsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
