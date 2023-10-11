import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
  providers: [ShoppingListService]
})
export class ShoppinglistComponent implements OnInit {
  ingredients!: Ingredient[]

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  } 

}
