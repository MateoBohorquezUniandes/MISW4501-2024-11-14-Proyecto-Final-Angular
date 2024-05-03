export class RegistroPage {
  get nombre() {
    return '#input_nombre';
  }
  get apellido() {
    return '#input_apellido';
  }
  get altura() {
    return '#input_altura';
  }
  get paisNacimiento() {
    return '#input_pais_nacimiento';
  }
  get tipoDocumento() {
    return '#select_tipo';
  }
  get documento() {
    return '#input_documento';
  }
  get ciudadNacimiento() {
    return '#input_ciudad_nacimiento';
  }
  get contraseña() {
    return '#input_contrasena';
  }
  get paisVivienda() {
    return '#input_pais_vivienda';
  }
  get confirmaContrasena() {
    return '#input_confirma_contrasena';
  }
  get ciudadVivienda() {
    return '#input_ciudad_vivienda';
  }
  get genero() {
    return '#input_genero';
  }
  get tiempoVivienda() {
    return '#input_tiempo';
  }
  get edad() {
    return '#input_edad';
  }
  get deporte() {
    return '#input_deporte';
  }
  get peso() {
    return '#input_peso';
  }

  get registroButton() {
    return 'button#boton_registro';
  }

  public setNombre(nombre): void {
    cy.get(this.nombre).type(nombre);
  }

  public setaApellido(apellido): void {
    cy.get(this.apellido).type(apellido);
  }

  public setAltura(altura): void {
    cy.get(this.altura).type(altura);
  }

  public setPaisNacimiento(pais): void {
    cy.get(this.paisNacimiento).type(pais);
  }

  public setTipoDocumento(tipoDocumento): void {
    cy.get(this.tipoDocumento).select(tipoDocumento);
  }

  public setDocumento(documento): void {
    cy.get(this.documento).type(documento);
  }

  public setCiudadNacimiento(ciudadNacimiento): void {
    cy.get(this.ciudadNacimiento).type(ciudadNacimiento);
  }

  public setContraseña(contraseña): void {
    cy.get(this.contraseña).type(contraseña);
  }

  public setPaisVivienda(pais): void {
    cy.get(this.paisVivienda).type(pais);
  }

  public setConfirmaContrasena(contrasena): void {
    cy.get(this.confirmaContrasena).type(contrasena);
  }

  public setCiudadVivienda(ciudad): void {
    cy.get(this.ciudadVivienda).type(ciudad);
  }

  public setGenero(genero): void {
    cy.get(this.genero).select(genero);
  }

  public setTiempo(tiempoViviendo): void {
    cy.get(this.tiempoVivienda).type(tiempoViviendo);
  }

  public setEdad(edad): void {
    cy.get(this.edad).type(edad);
  }

  public setDeporte(deporte): void {
    cy.get(this.deporte).select(deporte);
  }

  public setPeso(peso): void {
    cy.get(this.peso).type(peso);
  }

  public clickRegistroButton(): void {
    cy.get(this.registroButton).click();
  }

  public visit(): void {
    cy.visit('/registry');
  }
}
