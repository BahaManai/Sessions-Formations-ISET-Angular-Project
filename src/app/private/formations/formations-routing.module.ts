import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';

const routes: Routes = [
      {path: "formations", component: RechercheFormationComponent},{
      path: "formations/:id", component: DetailsFormationComponent
    },{
      path: "formations/edit/:id", component: EditFormationComponent
    },{path:"addformation", component: AddFormationComponent},
    { path: '', redirectTo: 'formations', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationsRoutingModule { }
