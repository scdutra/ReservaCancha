import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCanchaComponent } from './reserva-cancha.component';

describe('ReservaCanchaComponent', () => {
  let component: ReservaCanchaComponent;
  let fixture: ComponentFixture<ReservaCanchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaCanchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
