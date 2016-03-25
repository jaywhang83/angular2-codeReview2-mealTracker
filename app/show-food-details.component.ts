import { Component } from 'angular2/core';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';

@Component({
  selector: 'details-display',
  inputs: ['food'],
  directives: [EditFoodDetailsComponent],
  template:
  `
  <div class="container details">
  <h3>{{ food.name }}</h3>
    <ul>
      <li>Details: {{ food.details }}</li>
      <li>Calories: {{ food.calories }}</li>
    </ul>
    <button *ngIf="!showsEdit" (click)= "showsEdit =true"  class="btn-info btn-lg">Edit Food</button>
    <edit-food-details *ngIf="showsEdit" [food]="food">
    </edit-food-details>
  </div>
  `
})

export class FoodDetailsComponent {
  public showsEdit: boolean;
  public food: Food;
}
