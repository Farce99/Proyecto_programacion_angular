// src/app/lista/lista.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';

// ✅ CORRECCIÓN 1: Asegura la ruta de importación.
// Se recomienda usar el nombre del archivo si hay problemas de resolución.
import { ListaComponent } from './lista'; 


// ✅ CORRECCIÓN 2: El nombre en 'describe' debe reflejar la clase
// O al menos ser más claro, ya que la clase es 'ListaComponent'.
describe('ListaComponent', () => { 
    
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // ✅ Si ListaComponent es standalone, se importa aquí.
      imports: [ListaComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});