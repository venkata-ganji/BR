import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrsubheaderComponent } from './brsubheader.component';

describe('BrsubheaderComponent', () => {
  let component: BrsubheaderComponent;
  let fixture: ComponentFixture<BrsubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrsubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrsubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
