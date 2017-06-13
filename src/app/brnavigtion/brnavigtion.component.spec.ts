import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BRNavigtionComponent } from './brnavigtion.component';

describe('BRNavigtionComponent', () => {
  let component: BRNavigtionComponent;
  let fixture: ComponentFixture<BRNavigtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BRNavigtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BRNavigtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
