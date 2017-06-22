import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrcarouselComponent } from './brcarousel.component';

describe('BrcarouselComponent', () => {
  let component: BrcarouselComponent;
  let fixture: ComponentFixture<BrcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
