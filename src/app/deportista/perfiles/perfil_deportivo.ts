export class Habito {
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

export class Molestia {
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

export class CrearHabitoPayloadDTO {
  titulo: string;
  frecuencia: string;
  descripcion: string;
  constructor(titulo: string, frecuencia: string, descripcion: string) {
    this.titulo = titulo;
    this.frecuencia = frecuencia;
    this.descripcion = descripcion;
  }
}

export class CrearHabitoDTO {
  payload: CrearHabitoPayloadDTO;
  constructor(titulo: string, frecuencia: string, descripcion: string) {
    var p = new CrearHabitoPayloadDTO(titulo, frecuencia, descripcion);
    this.payload = p;
  }
}

export class CrearMolestiaPayloadDTO {
  titulo: string;
  fecha: string;
  tipo: string;
  descripcion: string;
  constructor(
    titulo: string,
    fecha: string,
    descripcion: string,
    tipo: string
  ) {
    this.titulo = titulo;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.tipo = tipo;
  }
}

export class MolestiaDTO {
  payload: CrearMolestiaPayloadDTO;
  constructor(
    titulo: string,
    fecha: string,
    descripcion: string,
    tipo: string
  ) {
    let p = new CrearMolestiaPayloadDTO(titulo, fecha, descripcion, tipo);
    this.payload = p;
  }
}
