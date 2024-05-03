import { HabitoAleatorio } from '../fixtures/validHabito';
import { HabitoPage } from '../pages/habito.page';

describe('Habitos', () => {
  let habitoPage: HabitoPage;
  let habito: HabitoAleatorio;
  beforeEach(() => {
    cy.viewport(1366, 768);
    habitoPage = new HabitoPage();
    cy.login();
    habitoPage.visit();
    cy.wait(2000);
    habito = new HabitoAleatorio();
  });

  it('should registar habito y mostrar en listado', () => {
    let titulo = habito.getTitulo();
    habitoPage.setTitulo(titulo);
    habitoPage.setFrecuencia(habito.getFrecuencia());
    habitoPage.setDescripcion(habito.getDescripcion());
    habitoPage.clickRegistrarHabito();
    cy.wait(2000);
    cy.get(habitoPage.ultimoHabito).contains(titulo);
  });
});
