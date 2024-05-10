import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfilesService } from '../perfiles.service';
import { ToastrService } from 'ngx-toastr';
import { Alimento } from '../perfil_alimenticio';
import { FormBuilder,FormGroup, ValidationErrors, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  selector: 'app-perfil-alimenticio',
  templateUrl: './alimenticio.component.html',
  styleUrls: ['./alimenticio.component.css']
})
export class PerfilAlimenticioComponent implements OnInit {
  alimentoForm = this.formBuilder.group({
    tipo: [0,[Validators.required, Validators.min(1)]]
  });
  preferenciaForm = this.formBuilder.group({
    tipo: [0,[Validators.required, Validators.min(1)]]
  });
  alimentos_usuario: Array<Alimento> = [];
  alimentos: Array<Alimento> = [];
  selectedAlimento: Alimento = new Alimento('','','Seleccionar','');
  toque:boolean = false;
  tipo_alimentacion:string = "No registra";
  constructor(
    private formBuilder:FormBuilder,
    private perfilesService: PerfilesService,
    private toastr: ToastrService,
    private renderer: Renderer2,
    private el: ElementRef,
  ) { }

  async ngOnInit() {
    await this.getProfile();
    this.getAlimentos();
  }

  getProfile(){
    this.perfilesService.getFoodProfiles().subscribe(
      (perfil) => {
        if (perfil != undefined) {
          this.alimentos_usuario = perfil.data.alimentos;
          if(perfil.data.tipo_alimentacion != undefined) {
            this.tipo_alimentacion = perfil.data.tipo_alimentacion;
          }
        }
      },
      (error) => {
        this.toastr.error('Error', 'Error al consultar el perfil:' + error);
      }
    );
  }
  getAlimentos(){
    this.perfilesService.getFood().subscribe(
      (response) => {
        let alimentos = response.data;
        if(this.alimentos_usuario.length != 0){
          for(var i = 0; i < this.alimentos_usuario.length; i++){
            var al = this.alimentos_usuario[i];
            for(var j = 0; j < alimentos.length; j++){
              var al2 = alimentos[j]
              if(al2.nombre == al.nombre){
                alimentos.splice(j, 1);
              }
            }
          }
          this.alimentos = alimentos
        }
        this.alimentos = alimentos
      },
      (error) => {
        this.toastr.error('Error', 'Error al recuperar los alimentos:' + error);
      }
    );
  }

  searchAlimentos(event:any){
    let input = this.el.nativeElement.querySelector('input');
    let filter = input.value.toUpperCase();
    let a = this.el.nativeElement.querySelectorAll('a.dropdown-item')
    for (var i = 0; i < a.length; i++) {
      let txtValue = a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  selectAlimento(event: any, alimento: Alimento){
    this.selectedAlimento = alimento;
    let input = this.el.nativeElement.querySelector('input');
    input.value = alimento.nombre;
  }

  registrarAlimento( preferencia:number | null){
    if (this.selectedAlimento.nombre == "Seleccionar"){
      this.toque = true;
    }
    else{
      const request = {
        id: this.selectedAlimento.id,
        nombre: this.selectedAlimento.nombre,
        categoria: this.selectedAlimento.categoria,
        tipo: preferencia
      }
      this.perfilesService.asociarAlimento(request).subscribe(() => {
        this.toastr.success('Alimento registrado exitosamente', 'Alimento');
        this.getProfile();
        this.alimentoForm.reset();
        this.selectedAlimento = new Alimento('','','Seleccionar','');
        this.toque = false;
        this.getAlimentos();
      });
    }
  }

  registrarTipoAlimentacion(tipo:number | null){
    const request = {
      tipo_alimentacion: tipo
    }
    this.perfilesService.registrarTipoAlimentacion(request).subscribe(() => {
      this.toastr.success('Tipo de alimentación registrada exitosamente', 'Tipo de Alimentación');
      this.getProfile();
      this.preferenciaForm.reset();
    })
  }

}
