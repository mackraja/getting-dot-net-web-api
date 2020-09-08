import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeModel } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.Service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipeModel[] = [];

  constructor(private recipeService: RecipeService,
    private router: Router, 
    private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
