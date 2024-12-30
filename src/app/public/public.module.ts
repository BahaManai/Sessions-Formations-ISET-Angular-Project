import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleEspacePublicRoutingModule } from './public-routing.module';

import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AccueilComponent,
    DetailsFormationComponent,
    RechercheFormationComponent,
  ],
  imports: [
    CommonModule,
    ModuleEspacePublicRoutingModule,
  ]
})
export class PublicModule { }
