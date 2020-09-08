import { RecipeModel } from '../models/recipe.model';

export class RecipeService {
    private recipes: RecipeModel[] = [
        new RecipeModel('Shrimp Recipes', 'These shrimp recipes are easy enough for a quick weeknight dinner, delish enough for date night', "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-taco-lime-shrimp-still006-1527253576.jpeg"),
        new RecipeModel('Potato Recipes', 'Baked, fried, or mashed, there"s no wrong way to cook potatoes. Need more comfort food?', "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fried-mashed-potato-balls-horizontal-1533320721.jpg")  
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}