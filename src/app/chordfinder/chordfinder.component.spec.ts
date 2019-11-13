import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordfinderComponent } from './chordfinder.component';

describe('ChordfinderComponent', () => {
  let component: ChordfinderComponent;
  let fixture: ComponentFixture<ChordfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
