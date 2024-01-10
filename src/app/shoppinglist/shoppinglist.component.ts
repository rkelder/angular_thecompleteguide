import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private ingredientsChangeSubscription: Subscription = new Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangeSubscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(): void {
    this.ingredientsChangeSubscription.unsubscribe();
  }
}
