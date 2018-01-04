/**
 * 
 */
import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Calcula operação matemática de dois números.
   * Suporta operações: soma, subtração, divisão e multiplicação.
   *  
   * @param num1 
   * @param num2 
   * @param operacao 
   */
  calcular (num1: number, num2: number, operacao: string):number {
    let resultado: number;

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;

      default: 
        resultado = 0;
    }

    return resultado;
  }
}
