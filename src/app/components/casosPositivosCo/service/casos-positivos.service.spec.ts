import { TestBed } from '@angular/core/testing';

import { CasosPositivosService } from './casos-positivos.service';

describe('CasosPositivosService', () => {
  let service: CasosPositivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasosPositivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
