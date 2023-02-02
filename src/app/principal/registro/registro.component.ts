import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  userService: any;
  lista: Users[] =[{nombre: '', username:'', password:''}];

  constructor(private formBuilder: FormBuilder ,private autenticacion: AutenticacionService, private router: Router,private dialogo: MatDialog){}
  
  enviar(){
    this.dialogo
    .open(DialogComponent)
  }
  
  redireccion = '';

  // Angular Material
  hide = true;

  registroForm = this.formBuilder.group({
    nombre: ['', {validators:[Validators.required, Validators.pattern('[a-zA-ZñÑá-úÁ-Ú ]*')]}],
    email: ['', {validators:[Validators.required]}],
    mensaje: ['', {validators:[Validators.required]}],
  });

  get nombre(){return this.registroForm.get('nombre');}
  get email(){return this.registroForm.get('email');}
  get mensaje(){return this.registroForm.get('mensaje');}
}
