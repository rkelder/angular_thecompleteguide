import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Massaman-Curry-1.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
