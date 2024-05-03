import { RegistroAleatorio } from '../fixtures/validRegistro';
import { RegistroPage } from '../pages/registro.page';

describe('Login', () => {
  let registroPage: RegistroPage;
  let usuario: RegistroAleatorio;
  beforeEach(() => {
    cy.viewport(1366, 768);
    registroPage = new RegistroPage();
    registroPage.visit();
    usuario = new RegistroAleatorio();
  });

  it('should registar deportista', () => {
    registroPage.setNombre(usuario.getNombre());
    registroPage.setaApellido(usuario.getApellido());
    registroPage.setAltura(usuario.getAltura());
    registroPage.setPaisNacimiento(usuario.getPaisNacimiento());
    registroPage.setTipoDocumento('CC');
    registroPage.setDocumento(usuario.getDocumentoDeportista());
    registroPage.setCiudadNacimiento(usuario.getCiudadNacimiento());
    registroPage.setContraseña(usuario.getContrasena());
    registroPage.setPaisVivienda(usuario.getPaisVivienda());
    registroPage.setConfirmaContrasena(usuario.getContrasena());
    registroPage.setCiudadVivienda(usuario.getCiudadVivienda());
    registroPage.setGenero(usuario.getGenero());
    registroPage.setTiempo(usuario.getTiempoVivienda());
    registroPage.setEdad(usuario.getEdad());
    registroPage.setDeporte(usuario.getDeporte());
    registroPage.setPeso(usuario.getPeso());
    registroPage.clickRegistroButton();
    cy.url().should('include', 'login');
  });
});
