export class Parametro {
  nombre: string;
  simbolo: string;
  funcion: string;
  constructor(nombre: string, simbolo: string, funcion: string) {
    this.nombre = nombre;
    this.funcion = funcion;
    this.simbolo = simbolo;
  }
}

export class CrearFormulaDTO {
  nombre: string;
  descripcion: string;
  formula: string;
  constructor(nombre: string, descripcion: string, formula: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.formula = formula;
  }
}
