import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestrasProcesadasNaComponent } from './muestras-procesadas-na.component';

describe('MuestrasProcesadasNaComponent', () => {
  let component: MuestrasProcesadasNaComponent;
  let fixture: ComponentFixture<MuestrasProcesadasNaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestrasProcesadasNaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestrasProcesadasNaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
