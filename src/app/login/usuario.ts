export class Usuario {
  apellido:string;
  nombre:string;
  plan_afiliacion: string;
  rol: string;
  created_at: string;
  updated_at: string;
  demografia: DemografiaUsuario;
  constructor(
    apellido:string,
    nombre:string,
    plan_afiliacion: string,
    rol: string,
    created_at: string,
    updated_at: string,
    demografia: DemografiaUsuario
  ){
    this.apellido = apellido;
    this.nombre = nombre;
    this.plan_afiliacion = plan_afiliacion;
    this.rol = rol;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.demografia = demografia;
  }
}

export class DemografiaUsuario {
  altura: number;
  ciudad_nacimiento: string;
  ciudad_residencia: string;
  edad: number;
  genero: string;
  pais_nacimiento: string;
  pais_residencia: string;
  peso: number;
  tiempo_residencia: number;
  constructor(
    altura: number,
    ciudad_nacimiento: string,
    ciudad_residencia: string,
    edad: number,
    genero: string,
    pais_nacimiento: string,
    pais_residencia: string,
    peso: number,
    tiempo_residencia: number
  ){
    this.altura = altura;
    this.ciudad_nacimiento = ciudad_nacimiento;
    this.ciudad_residencia = ciudad_residencia;
    this.edad = edad;
    this.genero = genero;
    this.pais_nacimiento = pais_nacimiento;
    this.pais_residencia = pais_residencia;
    this.peso = peso;
    this.tiempo_residencia = tiempo_residencia;
  }
}
