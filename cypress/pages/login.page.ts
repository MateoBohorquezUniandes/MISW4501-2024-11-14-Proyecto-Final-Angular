export class LoginPage {
  get tipoUsuario() {
    return '#selector_tipo_usuario';
  }
  get tipoDocumento() {
    return '#selector_tipo_documento';
  }
  get documento() {
    return '#input_numero_documento';
  }
  get contraseña() {
    return '#input_password';
  }
  get signInButton() {
    return 'button.btn.btn-primario';
  }

  public setTipoUsuario(tipoUsuario): void {
    cy.get(this.tipoUsuario).select(tipoUsuario);
  }

  public setTipoDocumento(tipoDocumento): void {
    cy.get(this.tipoDocumento).select(tipoDocumento);
  }

  public setDocumento(documento): void {
    cy.get(this.documento).type(documento);
  }

  public setContraseña(contraseña): void {
    cy.get(this.contraseña).type(contraseña);
  }

  public clickSignInButton(): void {
    cy.get(this.signInButton).click();
  }
  public seeLoginScreen(): void {
    expect(cy.get(this.signInButton));
  }

  public visit(): void {
    cy.visit('/');
  }
}
