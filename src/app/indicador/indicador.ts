export class Parametro {
  funcion: string;
  id: string;
  nombre: string;
  simbolo: string;
  constructor(id: string, funcion: string, nombre: string, simbolo: string) {
    this.id = id;
    this.funcion = funcion;
    this.nombre = nombre;
    this.simbolo = simbolo;
  }
}

export class Formula {
  id: string;
  nombre: string;
  descripcion: string;
  formula: string;
  parametros: Parametro[];
  constructor(
    id: string,
    nombre: string,
    descripcion: string,
    funcion: string,
    parametros: Parametro[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.formula = funcion;
    this.descripcion = descripcion;
    this.parametros = parametros;
  }
}
