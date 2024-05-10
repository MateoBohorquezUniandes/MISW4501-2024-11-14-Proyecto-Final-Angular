export class ResponseAlimentos {
  data: Array<Alimento>;
  checksum: string;
  constructor(
    data: Array<Alimento>,
    checksum: string
  ){
    this.data = data;
    this.checksum = checksum;
  }
}

export class Alimento {
  categoria: string;
  id: string;
  nombre: string;
  tipo: string;
  constructor(
    categoria: string,
    id: string,
    nombre: string,
    tipo: string
  ){
    this.categoria = categoria;
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
  }
}

export class PerfilAlimenticio {
  data:PerfilAlimenticioData;
  checksum:string;
  constructor(
    data: PerfilAlimenticioData,
    checksum: string
  ){
    this.data = data;
    this.checksum = checksum;
  }
}

export class PerfilAlimenticioData {
  alimentos: Array<Alimento>;
  identificacion: string;
  tipo_alimentacion: string;
  tipo_identificacion:string;
  constructor(
    alimentos:Array<Alimento>,
    identificacion: string,
    tipo_alimentacion: string,
    tipo_identificacion:string,
  ){
    this.alimentos = alimentos;
    this.identificacion = identificacion;
    this.tipo_alimentacion = tipo_alimentacion;
    this.tipo_identificacion = tipo_identificacion;
  }
}
