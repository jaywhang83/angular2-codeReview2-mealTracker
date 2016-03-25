import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template:
  `
  <div class="edit-form container">
    <div class="container inputs">
      <h3>Edit Name: </h3>
      <input [(ngModel)]="food.name" class="col-sm-6 input-lg edit-form" />
    </div>
    <div class="container inputs">
      <h3>Edit Details: </h3>
      <input [(ngModel)]="food.details" class="col-sm-6 input-lg edit-form" />
    </div>
    <div class="container inputs">
      <h3>Edit Calories: </h3>
      <input [(ngModel)]="food.calories" class="col-sm-6 input-lg edit-form" />
    </div>
  </div>
  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}
