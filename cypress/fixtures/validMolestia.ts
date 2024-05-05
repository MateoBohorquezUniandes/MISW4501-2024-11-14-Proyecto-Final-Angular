import { faker } from '@faker-js/faker';

export class MolestiaAleatorio {
  getTitulo() {
    return faker.lorem.word({ min: 2, max: 64 });
  }
  getFecha() {
    return faker.date.past().toDateString();
  }
  getTipo() {
    let tipo = ['Molestia', 'Lesion', 'Incapacidad'];
    let randomNumber = Math.floor(Math.random() * tipo.length);
    return tipo[randomNumber];
  }
  getDescripcion() {
    return faker.lorem.paragraph();
  }
}
