class Habito {
  titulo:string;
  frecuencia:string;
  descripcion:string;
  constructor(
    titulo:string,
    frecuencia:string,
    descripcion:string
  ){
    this.titulo = titulo;
    this.frecuencia = frecuencia;
    this.descripcion = descripcion;
  }
}

class Molestia {
  titulo:string;
  fecha:string;
  tipo:string;
  descripcion:string;
  constructor(
    titulo:string,
    fecha:string,
    tipo:string,
    descripcion:string
  ){
    this.titulo = titulo;
    this.fecha = fecha;
    this.tipo = tipo;
    this.descripcion = descripcion;
  }
}

export class PerfilDeportivo {
  molestias:Array<Molestia> = [];
  habitos:Array<Habito> = [];

  constructor(
    molestias:Array<Molestia>,
    habitos:Array<Habito>
    ){
      this.habitos = habitos;
      this.molestias = molestias;
    }

}
