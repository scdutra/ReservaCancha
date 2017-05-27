import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchaDetalleComponent } from './cancha-detalle.component';

describe('CanchaDetalleComponent', () => {
  let component: CanchaDetalleComponent;
  let fixture: ComponentFixture<CanchaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanchaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
