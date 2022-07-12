import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { listData } from './prio';
import { stData } from './status';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  formAgrPro: FormGroup;

  constructor(public formulario: FormBuilder,
    private proyect:ProjectService) {
    this.formAgrPro = this.formulario.group({
      numProyecto :[''],
      nomProyecto :[''],
      prioridad :[''],
      fecha :[''],
      cliente:[''],
      descripcion :[''],
      estatus :[''],
      cantidad :[''],
      fRequerida :[''],
      fFinalizacion :[''],
      fEntrega :[''],
      numCotizacion :['']
    });
  }

  ngOnInit(): void {   
  }
  list = listData;
  status = stData;
  enviarDatos(): any {
    alert("Si jurulo ue");
    console.log(this.formAgrPro.value);
  }
}
