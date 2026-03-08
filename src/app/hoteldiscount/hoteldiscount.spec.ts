import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoteldiscount } from './hoteldiscount';

describe('Hoteldiscount', () => {
  let component: Hoteldiscount;
  let fixture: ComponentFixture<Hoteldiscount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoteldiscount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hoteldiscount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
