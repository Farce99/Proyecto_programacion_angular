import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-lista',
  standalone: true,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],

  imports: [CommonModule, FormsModule] 
})
export class ListaComponent {
  

  @HostBinding('class.lista-activa')
  esListaActiva: boolean = true;
  

  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  agregarElemento(nuevo: string): void {
    if (nuevo && nuevo.trim().length > 0) {
      this.elementos.push(nuevo.trim());
    }
  
  }
}