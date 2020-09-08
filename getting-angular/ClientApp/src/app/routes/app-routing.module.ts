import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoComponent } from '../to-do/to-do.component';
import { ReciepsComponent } from '../recieps/recieps.component';
import { RecipesStartComponent } from '../recieps/recipes-start/recipes-start.component';
import { RecipesDetailComponent } from '../recieps/recipes-detail/recipes-detail.component';
import { RolesComponent } from '../roles/roles.component';

const appRoutes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'recipes', component: ReciepsComponent,
   children: [
      { path: '', component: RecipesStartComponent },
      { path: ':id', component: RecipesDetailComponent }
    ] 
  },
  { path: 'roles', component: RolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
