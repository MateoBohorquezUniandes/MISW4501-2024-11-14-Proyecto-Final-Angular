import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanListComponent } from './plan-list/plan-list.component';
import { FreeComponent } from './cards/free/free.component'
import { IntermediumComponent } from './cards/intermedium/intermedium.component'
import { PremiumComponent} from './cards/premium/premium.component'
import { PlanSuscriberComponent } from './plan-suscriber/plan-suscriber.component';

@NgModule({
  imports: [
    CommonModule,
    FreeComponent,
    IntermediumComponent,
    PremiumComponent,
    PlanSuscriberComponent
  ],
  exports: [
    PlanListComponent,
  ],
  declarations: [
    PlanListComponent,
  ]
})
export class PlanModule { }
