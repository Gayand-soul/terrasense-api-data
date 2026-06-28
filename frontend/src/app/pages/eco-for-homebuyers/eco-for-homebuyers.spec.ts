import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoForHomebuyers } from './eco-for-homebuyers';

describe('EcoForHomebuyers', () => {
  let component: EcoForHomebuyers;
  let fixture: ComponentFixture<EcoForHomebuyers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoForHomebuyers],
    }).compileComponents();

    fixture = TestBed.createComponent(EcoForHomebuyers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
