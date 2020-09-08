import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ReciepsComponent } from './recieps/recieps.component';
import { RecipesStartComponent } from './recieps/recipes-start/recipes-start.component';
import { RecipesListComponent } from './recieps/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recieps/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recieps/recipes-list/recipes-item/recipes-item.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { RolesComponent } from './roles/roles.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { RecipeService } from './services/recipe.Service';
import { RoleService } from './services/role.Service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToDoComponent,
    ReciepsComponent,
    RecipesStartComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RolesComponent,
    RolesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RecipeService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
