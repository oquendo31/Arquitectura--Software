import { TestBed } from '@angular/core/testing';

import { MuestrasProcesadasService } from './muestras-procesadas.service';

describe('MuestrasProcesadasService', () => {
  let service: MuestrasProcesadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuestrasProcesadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
