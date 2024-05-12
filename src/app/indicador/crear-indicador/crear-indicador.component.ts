import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IndicadorService } from '../indicador.service';
import { ToastrService } from 'ngx-toastr';
import { Formula } from '../indicador';

export interface ParametroInput {
  nombre: string;
  simbolo: string;
  funcion: string;
  isEdit: boolean;
  id: number;
  [key: string]: any;
}

// const USER_DATA: Parametro[] = [
//   { id: 1, nombre: 'nombre q', simbolo: '/', funcion: 'x*2', isEdit: false },
// ];
const COLUMNS_SCHEMA = [
  {
    key: 'simbolo',
    type: 'text',
    label: 'Simbolo',
  },
  {
    key: 'nombre_parametro',
    type: 'text',
    label: 'Nombre',
  },
  {
    key: 'funcion',
    type: 'text',
    label: 'Función',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

@Component({
  selector: 'app-crear-indicador',
  templateUrl: './crear-indicador.component.html',
  styleUrls: ['./crear-indicador.component.css', '../../../styles.css'],
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
  ],
})
export class CrearIndicadorComponent implements OnInit {
  formulas: Array<Formula> = [];

  indicadorForm = this.formBuilder.group({
    nombre: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(64)],
    ],
    descripcion: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(64)],
    ],
    formula: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(64)],
    ],
  });
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource: ParametroInput[] = [];
  columnsSchema: any = COLUMNS_SCHEMA;

  constructor(
    private formBuilder: FormBuilder,
    private indicadorService: IndicadorService,
    private toastr: ToastrService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.getFormulas();
  }

  getFormulas(): void {
    this.indicadorService.getFormulas().subscribe((formulas) => {
      this.formulas = formulas;
    });
  }

  createIndicador(
    nombre: string | null,
    descripcion: string | null,
    formula: string | null
  ): void {
    console.log('CREAR UIndicador');
    let formulaPayload = {
      nombre: nombre,
      descripcion: descripcion,
      formula: formula,
      parametros: {},
    };

    let parametros: { [key: string]: any } = {};
    this.dataSource.forEach((element) => {
      parametros[element.simbolo] = {
        simbolo: element['nombre_parametro'],
        funcion: element.funcion,
      };
    });

    formulaPayload.parametros = parametros;

    console.log(JSON.stringify(formulaPayload));

    this.indicadorService.crearFormula(formulaPayload).subscribe(
      (data) => {
        this.toastr.success('Formula Creada Satisfactoriamente', 'Formula');
        this.indicadorForm.reset();
        this.dataSource = [];
      },
      (error) => {
        this.toastr.error('Error', 'Error creando la formula:' + error.message);
      }
    );
  }

  addRow() {
    const newRow = {
      id: Date.now(),
      nombre: '',
      simbolo: '',
      funcion: '',
      isEdit: true,
    };
    this.dataSource = [...this.dataSource, newRow];
  }

  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }

  inputHandler(e: any, idToFind: number, key: string) {
    const result = this.dataSource.find(({ id }) => id == idToFind);
    if (result !== undefined) {
      const inputValue = (e.target as HTMLInputElement).value;
      result[key] = inputValue;
    }
  }
}
