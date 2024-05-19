import { LoginPage } from '../pages/login.page';
import validUser from '../fixtures/validLogin.json';

describe('Login', () => {
  let loginPage: LoginPage;
  beforeEach(() => {
    cy.viewport(1366, 768);
    loginPage = new LoginPage();
    loginPage.visit();
    cy.wait(3000);
  });

  it('should login the user', () => {
    loginPage.setTipoUsuario(validUser.tipo_usuario);
    loginPage.setTipoDocumento(validUser.tipo_documento);
    loginPage.setDocumento(validUser.documento);
    loginPage.setContraseña(validUser.contrasena);
    loginPage.clickSignInButton();
    cy.url().should('include', 'deportista');
  });
});
