import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor (Punto 6)
import { FormsModule } from '@angular/forms';   // Necesario para #ngForm y (ngSubmit) (Punto 8 y 9)

@Component({
  selector: 'app-lista',
  standalone: true,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  // Importamos los módulos necesarios para las directivas en el template
  imports: [CommonModule, FormsModule] 
})
export class ListaComponent {
  
  // 💡 Implementación de HostBinding (Punto 7)
  // Agrega una clase CSS llamada 'lista-activa' al elemento anfitrión <app-lista>
  @HostBinding('class.lista-activa')
  esListaActiva: boolean = true;
  
  // 💡 Implementación de array de elementos (Punto 5)
  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  // 💡 Función para agregar elementos (Punto 9 y 10)
  agregarElemento(nuevo: string): void {
    if (nuevo && nuevo.trim().length > 0) {
      this.elementos.push(nuevo.trim());
    }
  
  }
}