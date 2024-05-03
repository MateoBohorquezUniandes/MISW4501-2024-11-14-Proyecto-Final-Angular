import { faker } from '@faker-js/faker';

export class HabitoAleatorio {
  getTitulo() {
    return faker.lorem.word({ min: 2, max: 64 });
  }

  getFrecuencia() {
    let frecuencia = ['Diario', 'Semanal', 'Mensual', 'Anual'];
    let randomNumber = Math.floor(Math.random() * frecuencia.length);
    return frecuencia[randomNumber];
  }
  getDescripcion() {
    return faker.lorem.paragraph();
  }
}
