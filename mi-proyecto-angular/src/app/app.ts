import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from './lista/lista'; // 👈 Importa tu componente Lista

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaComponent], // 👈 Agrega aquí el componente
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-proyecto-angular');
}
