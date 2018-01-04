import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], 
    (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it ('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService)=>{
      let soma = service.calcular(1,4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it ('deve garantir que 1 - 4 = -3',
    inject([CalculadoraService], (service: CalculadoraService)=>{
      let subtracao = service.calcular(1,4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  );

  it ('deve garantir que 1 / 2 = 0.5',
    inject([CalculadoraService], (service: CalculadoraService)=>{
      let divisao = service.calcular(1,2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.5);
    })
  );

  it ('deve garantir que 2 * 5 = 10',
    inject([CalculadoraService], (service: CalculadoraService)=>{
      let multiplicacao = service.calcular(2,5, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(10);
    })
  );

  it ('deve retornar 0 para operacao invalida',
    inject([CalculadoraService], (service: CalculadoraService)=>{
      let invalida = service.calcular(2,5, '%');
      expect(invalida).toEqual(0);
    })
  );
});
