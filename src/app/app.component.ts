import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento:boolean =true
  public tipoEncenrramento: string | undefined;

  public encerraJogo(tipo: string):void{
    console.log(tipo) 
    this.jogoEmAndamento= false
    this.tipoEncenrramento = tipo
  }

  public reinicarJogo(): void{
    this.jogoEmAndamento = true
    this.tipoEncenrramento = undefined
  }
}
