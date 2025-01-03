import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { FormateursRoutingModule } from './formateurs-routing.module';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';
import { ListFormateurComponent } from './list-formateur/list-formateur.component';


@NgModule({
  declarations: [
    AddFormateurComponent,
    EditFormateurComponent,
    ListFormateurComponent
  ],
  imports: [
    CommonModule,
    FormateursRoutingModule,
    FormsModule
  ]
})
export class FormateursModule { }