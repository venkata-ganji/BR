import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrloginComponent } from './brlogin.component';

describe('BrloginComponent', () => {
  let component: BrloginComponent;
  let fixture: ComponentFixture<BrloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
