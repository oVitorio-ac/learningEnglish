import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASE } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent  implements OnInit, OnDestroy{

  public frases: Frase[] = FRASE
  public resposta: string =''
  public rodada: number = 0
  public rodadaFrase!: Frase;
  public progresso: number = 0
  public tentativas: number = 3
  @Output() public encerraJogo: EventEmitter<string> = new EventEmitter()

  constructor(){
    this.atualizaRodadaFrase()
  }


  verificarResposta(): void{
    if(this.rodadaFrase.frasePtBr == this.resposta){
      this.rodada++
      this.atualizaRodadaFrase()
      this.progresso = this.progresso + (100/this.frases.length)
      this.resposta = ''

      if (this.rodada === 4){
        this.encerraJogo.emit('vitoria')
      }

    }else{
      this.resposta = ''
      this.tentativas--
      if(this.tentativas == -1){
        this.encerraJogo.emit('derrota')
      }
    }

  }

  atualizarResposta(resposta: Event): void{
     this.resposta = (<HTMLInputElement>resposta.target).value

  }
  public atualizaRodadaFrase(): void{
    this.rodadaFrase = this.frases[this.rodada]

  }

  ngOnInit(){
  }

  ngOnDestroy(){
    
  }
}
