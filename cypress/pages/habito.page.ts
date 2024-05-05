export class HabitoPage {
  get titulo() {
    return '#inputTituloHabito';
  }
  get frecuencia() {
    return '#frecuenciaHabito';
  }
  get descripcion() {
    return '#inputDescripcionHabito';
  }

  get registrarHabitoBoton() {
    return 'button#registrarHabito';
  }

  get ultimoHabito() {
    return 'ul#lista_habitos > li:nth-last-child(1)';
  }

  public setTitulo(titulo): void {
    cy.get(this.titulo).type(titulo);
  }

  public setFrecuencia(frecuencia): void {
    cy.get(this.frecuencia).select(frecuencia);
  }

  public setDescripcion(descripcion): void {
    cy.get(this.descripcion).type(descripcion);
  }

  public visit(): void {
    cy.visit('/deportista/perfiles/deportivo');
  }

  public clickRegistrarHabito(): void {
    cy.get(this.registrarHabitoBoton).click();
  }
}
