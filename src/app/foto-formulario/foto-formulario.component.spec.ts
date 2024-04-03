import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoFormularioComponent } from './foto-formulario.component';

describe('FotoFormularioComponent', () => {
  let component: FotoFormularioComponent;
  let fixture: ComponentFixture<FotoFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoFormularioComponent]
    });
    fixture = TestBed.createComponent(FotoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
