import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookonline } from './bookonline';

describe('Bookonline', () => {
  let component: Bookonline;
  let fixture: ComponentFixture<Bookonline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookonline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookonline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
