import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  //dataSource = new MatTableDataSource<Parametro>();
  dataSource: ParametroInput[] = [];
  columnsSchema: any = COLUMNS_SCHEMA;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  createIndicador(
    nombre: string | null,
    descripcion: string | null,
    formula: string | null
  ): void {}

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

  editRow(row: any) {
    console.log('row' + JSON.stringify(row));
    if (row.id === 0) {
      row.id = Date.now();
      row.isEdit = false;
      console.log(row);
      this.dataSource.push(row);
    } else {
      //this.userService.updateUser(row).subscribe(() => (row.isEdit = false))
    }
  }

  inputHandler(e: any, idToFind: number, key: string) {
    const result = this.dataSource.find(({ id }) => id == idToFind);
    if (result !== undefined) {
      const inputValue = (e.target as HTMLInputElement).value;
      console.log('Input value:', inputValue);
      result[key] = inputValue;
    }

    console.log(JSON.stringify(this.dataSource));
  }

  handleInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Input value:', inputValue);
  }
}
