import { MolestiaAleatorio } from '../fixtures/validMolestia';
import { CrearMolestiaPage } from '../pages/molestia.page';

describe('Molestias', () => {
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

  it('should registar molestia y mostrar en listado', () => {
    let titulo = molestia.getTitulo();
    molestiaPage.setTitulo(titulo);
    molestiaPage.setFecha(molestia.getFecha());
    molestiaPage.setTipo(molestia.getTipo());
    molestiaPage.setDescripcion(molestia.getDescripcion());
    molestiaPage.clickRegistrarMolestia();
    cy.wait(2000);
    cy.get(molestiaPage.ultimaMolestia).contains(titulo);
  });
});
