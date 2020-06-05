import { Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
  
})

export class MenuComponent {


  public displayH: string = 'inline-block';

  public displayC: string = 'none';

  public displayM: string = 'inline-block';
  public altura: string = '80px';



  expandir(event: any): void {
    this.displayH = 'none';
    this.displayC = 'inline-block';
    this.displayM = 'inline-block';
    this.altura = '300px';
    // event.target.classList.add("ativado");
  }
  
  fechar(event: any): void {
    this.displayH = 'inline-block';
    this.displayC = 'none';
    this.displayM = 'none';
  }
}
