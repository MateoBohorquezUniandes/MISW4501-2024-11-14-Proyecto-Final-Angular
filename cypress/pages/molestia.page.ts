export class CrearMolestiaPage {
  get titulo() {
    return '#inputTituloMolestia';
  }
  get fecha() {
    return '#inputFechaMolestia';
  }
  get tipo() {
    return '#tipoMolestia';
  }
  get descripcion() {
    return '#inputDescripcionMolestia';
  }

  get registrarMolestiaBoton() {
    return 'button#registrarMolestia';
  }

  get ultimaMolestia() {
    return 'ul#lista_molestias > li:nth-last-child(1)';
  }

  public setTitulo(titulo): void {
    cy.get(this.titulo).type(titulo);
  }

  public setTipo(tipo): void {
    cy.get(this.tipo).select(tipo);
  }

  public setFecha(fecha): void {
    cy.get(this.fecha).type(fecha);
  }

  public setDescripcion(descripcion): void {
    cy.get(this.descripcion).type(descripcion);
  }

  public visit(): void {
    cy.visit('/deportista/perfiles/deportivo');
  }

  public clickRegistrarMolestia(): void {
    cy.get(this.registrarMolestiaBoton).click();
  }
}
