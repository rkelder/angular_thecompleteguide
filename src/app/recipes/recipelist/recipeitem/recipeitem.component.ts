import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css'],
})
export class RecipeitemComponent implements OnInit {
  @Input()
  recipe: Recipe = { name: '', description: '', imagePath: '' };

  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
