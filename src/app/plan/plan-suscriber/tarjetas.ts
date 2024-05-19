export const tarjetas:Array<Tarjeta> = [
  { numero: '1234567890123456', nombre: 'OSCAR J MELO C', fecha: '02/30', cvc: '947'},
  { numero: '8832461264251332', nombre: 'DIANA C MELO G', fecha: '03/40', cvc: '667'},
  { numero: '9674183340561234', nombre: 'JUAN A SALCEDO B', fecha: '06/28', cvc: '528'},
]
export class Tarjeta{
  numero: string;
  nombre: string;
  fecha: string;
  cvc: string;
  constructor(numero: string, nombre: string, fecha: string, cvc: string){
    this.numero = numero;
    this.nombre = nombre;
    this.fecha = fecha;
    this.cvc = cvc;
  }
}
