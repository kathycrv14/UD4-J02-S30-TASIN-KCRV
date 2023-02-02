import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatMenuModule,
  ],
  exports: [
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
  ]
})
export class PrincipalModule { }
