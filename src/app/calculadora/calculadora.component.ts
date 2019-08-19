import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {


    public numero1: number;
    public numero2: number;
    public resultado: number;
    public valoresIncorrectos= false;

    suma(){
      this.valoresIncorrectos= false;
      this.resultado = this.numero1 + this.numero2;
    }
    resta(){
      this.valoresIncorrectos= false;
      this.resultado = this.numero1 - this.numero2;
    }
    multiplicar(){
      this.valoresIncorrectos= false;
      this.resultado = this.numero1 * this.numero2;
    }
    dividir(){
      if(this.numero2 == 0){
        this.valoresIncorrectos= true;
      }else {
        this.valoresIncorrectos= false;
      }
      this.resultado = (this.numero1) / (this.numero2);
    }
    modulo(){
      if(this.numero2 == 0){
        this.valoresIncorrectos= true;
      }else {
        this.valoresIncorrectos= false;
      }
      this.resultado = (this.numero1) % (this.numero2);
    }

    reset(){
      this.numero1= null;
      this.numero2= null;
      this.resultado= null;
      this.valoresIncorrectos= false;
    }


  ngOnInit() {
  }

}
