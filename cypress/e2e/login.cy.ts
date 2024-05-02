import { LoginPage } from '../pages/login.page';
import validUser from '../fixtures/validLogin.json';

describe('Login', () => {
  let loginPage: LoginPage;
  beforeEach(() => {
    cy.viewport(1366, 768);
    loginPage = new LoginPage();
    loginPage.visit();
  });

  it('should login the user', () => {
    loginPage.setTipoUsuario(validUser.tipo_usuario);
    loginPage.setTipoDocumento(validUser.tipo_documento);
    loginPage.setDocumento(validUser.documento);
    loginPage.setContraseña(validUser.contrasena);
    loginPage.clickSignInButton();
    cy.get('p').should(
      'contain.text ',
      'Esta vista corresponde al tablero de control'
    );
  });
});
