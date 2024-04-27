// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { CrearMolestiaComponent } from './crear-molestia.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { PerfilesService } from '../../perfiles.service';
// import { Molestia } from '../../perfil_deportivo';
// import { of } from 'rxjs';
// import { LoginService } from '../../../../login/login.service';

// describe('CrearMolestiaComponent', () => {
//   let component: CrearMolestiaComponent;
//   let fixture: ComponentFixture<CrearMolestiaComponent>;
//   let spy = jasmine.createSpyObj('PerfilesService', ['createHabitoDeportivo']);
//   let spyLogin = jasmine.createSpyObj('LoginService', ['login', 'setToken']);

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         //RouterTestingModule.withRoutes([{ path: 'socios', component: SocioHomeComponent },{ path: 'deportista', component: DeportistaHomeComponent },{ path: 'organizador', component: OrganizadorHomeComponent }]),
//         ReactiveFormsModule,
//         ToastrModule.forRoot(),
//         HttpClientTestingModule,
//         HttpClientModule,
//       ],
//       providers: [
//         { provide: PerfilesService, useValue: spy },
//         { provide: LoginService, useValue: spyLogin },
//       ],
//       declarations: [CrearMolestiaComponent],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CrearMolestiaComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


//   it('Prueba metodo crear moelstia', () => {
//     fixture = TestBed.createComponent(CrearMolestiaComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();

//     const titulo = component.molestiaForm.controls['titulo'];
//     const fecha = component.molestiaForm.controls['fecha'];
//     const descripcion = component.molestiaForm.controls['descripcion'];
//     const tipo = component.molestiaForm.controls['tipo'];
//     titulo.setValue('molest');
//     fecha.setValue('2024-04-17');
//     descripcion.setValue('molestias al andar en bicicle');
//     tipo.setValue(1);
//     expect(component.molestiaForm.valid).toBeTrue();
//     const data = { token: 'blabla', rol: 'DEPORTISTA' };
//     spyLogin.setToken.and.returnValue(of(data));
//     const molestia = new Molestia(
//       titulo.value,
//       fecha.value,
//       tipo.value,
//       descripcion.value
//     );
//     spy.createHabitoDeportivo.and.returnValue(of(202));
//     component.createMolestia(molestia);
//   });
// });
