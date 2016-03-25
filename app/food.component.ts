import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template:
  `
  <div>
    <h2>{{ food.name }}</h2>
    <ul>
      <li>{{ food.details}}</li>
      <li>{{ food.calories}}</li>
    </ul>
  </div>
  `

})

export class FoodComponent {
  public food: Food;
  public selectedFoodName: Food;
}
