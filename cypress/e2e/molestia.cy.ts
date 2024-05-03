import { MolestiaAleatorio } from '../fixtures/validMolestia';
import { CrearMolestiaPage } from '../pages/crear_molestia.page';

describe('Login', () => {
  let molestiaPage: CrearMolestiaPage;
  let molestia: MolestiaAleatorio;
  beforeEach(() => {
    cy.viewport(1366, 768);
    molestiaPage = new CrearMolestiaPage();
    cy.login();
    molestiaPage.visit();
    cy.wait(2000);
    molestia = new MolestiaAleatorio();
  });

  it('should registar molestia', () => {
    molestiaPage.setTitulo(molestia.getTitulo());
    molestiaPage.setFecha(molestia.getFecha());
    molestiaPage.setTipo(molestia.getTipo());
    molestiaPage.setDescripcion(molestia.getDescripcion());
    molestiaPage.clickRegistrarMolestia();
  });
});
