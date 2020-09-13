import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosPositivosColComponent } from './casos-positivos-col.component';

describe('CasosPositivosColComponent', () => {
  let component: CasosPositivosColComponent;
  let fixture: ComponentFixture<CasosPositivosColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasosPositivosColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosPositivosColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
