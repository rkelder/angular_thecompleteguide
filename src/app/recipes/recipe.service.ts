import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Massaman Curry',
      'A mild and fragrant curry',
      'https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Massaman-Curry-1.jpg', [new Ingredient('potatoes', 1), new Ingredient('Massaman Curry', 1), new Ingredient('Coconut Milk', 1), new Ingredient('Chicken', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private shoppingListService: ShoppingListService) { }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
}
