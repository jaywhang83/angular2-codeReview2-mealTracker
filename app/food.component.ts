import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template:
  `
  <div>
    <h2>{{ food.name }}</h2>
  </div>
  `

})

export class FoodComponent {
  public food: Food;
}
