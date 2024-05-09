export class PerfilDemografico {
  data:PerfilDemograficoData;
  checksum:string;
  constructor(
    data:PerfilDemograficoData,
    checksum:string
  ){
    this.data = data;
    this.checksum = checksum;
  }
}
export class PerfilDemograficoData {
  clasificacion_riesgo: ClasificacionRiesgo;
  fisiologia: Fisiologia;
  demografia: Demografia;
  constructor(
    clasificacion_riesgo: ClasificacionRiesgo,
    fisiologia: Fisiologia,
    demografia: Demografia
  ){
    this.clasificacion_riesgo = clasificacion_riesgo;
    this.fisiologia = fisiologia;
    this.demografia = demografia;
  }
}

export class ClasificacionRiesgo {
  imc: Imc;
  constructor(imc:Imc){
    this.imc = imc;
  }
}

export class Imc {
  categoria: string;
  valor: number;
  constructor(
    categoria:string,
    valor:number
  ){
    this.categoria = categoria
    this.valor = valor
  }
}

export class Fisiologia {
  altura: number;
  edad: number;
  genero: string;
  peso: number;
  constructor(
    altura: number,
    edad: number,
    genero: string,
    peso: number
  ){
    this.altura = altura;
    this.edad = edad;
    this.genero = genero;
    this.peso = peso;
  }
}

export class Demografia {
  ciudad: string;
  pais: string;
  constructor(
    ciudad:string,
    pais:string
  ){
    this.ciudad = ciudad;
    this.pais = pais;
  }
}
