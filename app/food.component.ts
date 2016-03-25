import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodDetailsComponent } from './show-food-details.component';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  outputs: ['onFoodNameSelect'],
  directives: [FoodDetailsComponent],
  template:
  `
    <h2 class="foodName">{{ food.name }}</h2>
  `
})

export class FoodComponent {
  public food: Food;
  public onFoodNameSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodNameSelect = new EventEmitter();
  }

  foodClicked(clickedFood: Food): void {
    console.log("Child", clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodNameSelect.emit(clickedFood);
  }
}
