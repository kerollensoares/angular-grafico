import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-grafico';
  public instalacoesHora: any[] = [1000, 300];
  public instalacoesPorLocalidade: any[] = [{ 'name': 'Minas Gerais', 'value': 50}, { 'name': 'Rio de Janeiro', 'value': 40},];
}
