import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePlaces } from './compare-places';

describe('ComparePlaces', () => {
  let component: ComparePlaces;
  let fixture: ComponentFixture<ComparePlaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparePlaces],
    }).compileComponents();

    fixture = TestBed.createComponent(ComparePlaces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
