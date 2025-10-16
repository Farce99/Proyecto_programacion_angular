import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from './lista/lista'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-proyecto-angular');
}
