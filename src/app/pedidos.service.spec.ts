/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PedidosService } from './pedidos.service';

describe('PedidosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidosService]
    });
  });

  it('should ...', inject([PedidosService], (service: PedidosService) => {
    expect(service).toBeTruthy();
  }));
});
