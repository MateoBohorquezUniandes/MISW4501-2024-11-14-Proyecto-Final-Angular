import { faker } from '@faker-js/faker';

export class RegistroAleatorio {
  private contrasena: string;
  constructor() {
    this.contrasena = faker.internet.password(10);
  }

  getNombre() {
    return faker.lorem.words();
  }
  getApellido() {
    return faker.lorem.words();
  }
  getAltura() {
    return faker.number.float({ min: 1.5, max: 2.0 });
  }
  getPaisNacimiento() {
    return faker.location.country();
  }
  getCiudadNacimiento() {
    return faker.location.city();
  }
  getContrasena() {
    return this.contrasena;
  }
  getPaisVivienda() {
    return faker.location.country();
  }
  getCiudadVivienda() {
    return faker.location.city();
  }
  getGenero() {
    let gender = ['Femenino', 'Masculino', 'Prefiero no especificar'];
    let randomNumber = Math.floor(Math.random() * gender.length);
    return gender[randomNumber];
  }
  getTiempoVivienda() {
    return faker.number.int({ min: 1, max: 10 });
  }
  getEdad() {
    return faker.number.int({ min: 17, max: 60 });
  }
  getDeporte() {
    let sport = ['Atletismo', 'Ciclismo'];
    let randomNumber = Math.floor(Math.random() * sport.length);
    return sport[randomNumber];
  }
  getPeso() {
    return faker.number.int({ min: 50, max: 200 });
  }
  getDocumentoDeportista() {
    return faker.number.int({ min: 100000000, max: 999999999 });
  }
}
