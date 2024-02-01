import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css'],
})
export class ShoppinglisteditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm!: NgForm;
  subscription?: Subscription;
  editMode: boolean = false;
  editedItemIndex?: number;
  editedItem?: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({ name: this.editedItem.name, amount: this.editedItem.amount });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex!, newIngredient);
    } else {

      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(form: NgForm) {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(form: NgForm) {
    this.shoppingListService.deleteIngredient(this.editedItemIndex!);
    this.onClear(form);

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
