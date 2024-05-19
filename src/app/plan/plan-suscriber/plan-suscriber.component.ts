import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FreeComponent } from '../cards/free/free.component'
import { IntermediumComponent } from '../cards/intermedium/intermedium.component'
import { PremiumComponent} from '../cards/premium/premium.component'
import { tarjetas, Tarjeta } from './tarjetas'
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PagosService } from './pagos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports:[CommonModule, IntermediumComponent, PremiumComponent, FreeComponent, ReactiveFormsModule],
  standalone: true,
  selector: 'app-plan-suscriber',
  templateUrl: './plan-suscriber.component.html',
  styleUrls: ['./plan-suscriber.component.css']
})
export class PlanSuscriberComponent implements OnInit {
  subscription!: string
  precioMensual!: string
  precioAnual!: string
  tarjetaValid!:boolean
  body!:string
  tarjetaForm = this.formBuilder.group({
    numero: ['',[Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]],
    nombre: ['',[Validators.required]],
    fecha: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]{2}\/[0-9]{2}$')]],
    cvc: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]*$')]]
  })
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private pagosService: PagosService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    let fragment = this.router.url.split('?subscription=')
    switch(fragment[1]){
      case 'intermedium':
        this.subscription = "intermedium";
        this.precioMensual = "30.000";
        this.precioAnual = "300.000";
        this.body = "INTERMEDIO";
        break;
      case 'premium':
        this.precioMensual = "50.000";
        this.precioAnual = "500.000";
        this.subscription = "premium";
        this.body = "PREMIUM";
        break;
    }
  }
  cambiarPlan(numero: string | null, fecha: string | null, cvc: string | null){
    this.tarjetaValid = this.validarTarjeta(numero, fecha, cvc)
    if(!this.tarjetaValid){
      this.toastr.error('Tarjeta invalida', 'Error' );
    }
    else{
      const request = {
        plan_afiliacion: this.body
      }
      this.pagosService.changePlan(request).subscribe(
        (response) => {
          this.toastr.success('Pago procesado exitosamente', 'Success' );
          let seconds: number = 30;
          const timer = setInterval(() => {
            seconds--;
            if (seconds == 0) {
              clearInterval(timer);
              this.router.navigateByUrl("/deportista/suscripcion")
            }
          }, 1000);
        },
        (error) => {
          this.toastr.error('Error al procesar el pago', 'Error' );
        }
      );
    }
  }
  validarTarjeta(numero: string | null, fecha: string | null, cvc: string | null){
    for(let tarjeta of tarjetas){
      if(tarjeta.numero == numero && tarjeta.fecha == fecha && tarjeta.cvc == cvc){
        return true;
      }
    }
    return false;
  }
}
