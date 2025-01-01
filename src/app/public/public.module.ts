import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleEspacePublicRoutingModule } from './public-routing.module';

import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchModuleComponent } from "./search-module/search-module.component";

@NgModule({
  declarations: [
    AccueilComponent,
    DetailsFormationComponent,
    RechercheFormationComponent,
  ],
  imports: [
    CommonModule,
    ModuleEspacePublicRoutingModule,
    SearchModuleComponent
]
})
export class PublicModule { }
