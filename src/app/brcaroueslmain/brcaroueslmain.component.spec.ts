import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrcaroueslmainComponent } from './brcaroueslmain.component';

describe('BrcaroueslmainComponent', () => {
  let component: BrcaroueslmainComponent;
  let fixture: ComponentFixture<BrcaroueslmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrcaroueslmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrcaroueslmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
