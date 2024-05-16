export class Evento{
  distancia: number;
  fecha: string;
  id: string;
  lugar: string;
  nivel: string;
  nombre: string;
  tipo: string;
  constructor(
    distancia: number,
    fecha: string,
    id: string,
    lugar: string,
    nivel: string,
    nombre: string,
    tipo: string
  ){
    this.distancia = distancia;
    this.fecha = fecha;
    this.id = id;
    this.lugar = lugar;
    this.nivel = nivel;
    this.nombre = nombre;
    this.tipo = tipo;
  }
}
