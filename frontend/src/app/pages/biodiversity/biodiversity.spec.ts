import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biodiversity } from './biodiversity';

describe('Biodiversity', () => {
  let component: Biodiversity;
  let fixture: ComponentFixture<Biodiversity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biodiversity],
    }).compileComponents();

    fixture = TestBed.createComponent(Biodiversity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
