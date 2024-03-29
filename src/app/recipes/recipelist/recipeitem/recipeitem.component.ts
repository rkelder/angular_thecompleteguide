import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css'],
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;

  constructor() {}

  ngOnInit() {}
}
