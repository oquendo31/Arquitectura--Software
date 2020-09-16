import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosPositivosMuComponent } from './casos-positivos-mu.component';

describe('CasosPositivosMuComponent', () => {
  let component: CasosPositivosMuComponent;
  let fixture: ComponentFixture<CasosPositivosMuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasosPositivosMuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosPositivosMuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
