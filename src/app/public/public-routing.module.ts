import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
const routes: Routes = [
  {
    path: "accueil", component: AccueilComponent },{
    path: "formations", component: RechercheFormationComponent},{
    path: "formations/:id", component: DetailsFormationComponent
  },{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEspacePublicRoutingModule { }
