import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'details-display',
  inputs: ['food'],
  template:
  `
  <div>
    <ul>
      <li>{{ food.details }}</li>
      <li>{{ food.calories }}</li>
    </ul>
    <button>Edit Food</button>
  </div>
  `

})

export class FoodDetailsComponent {
  public food: Food;
}

console.log("food is", this.food);
