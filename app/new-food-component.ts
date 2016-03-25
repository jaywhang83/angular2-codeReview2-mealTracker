import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template:
  `
  <div class="food-form container">
    <h1>Create Task:</h1>
    <div class="container">
      <input placeholder="Name" class="col-sm-6 input-lg" #newName>
    </div>
    <br>
    <div class="container">
      <input placeholder="Details" class="col-sm-6 input-lg" #newDetails>
    </div>
    <br>
    <div class="container">
      <input placeholder="Calories" class="col-sm-6 input-lg" #newCalroies>
    </div>
    <br>
    <button (click)="addFood(newName, newDetails, newCalroies)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Object>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }

  addFood(newFoodName: HTMLInputElement, newFoodDetails: HTMLInputElement, newFoodCalories: HTMLInputElement) {
    this.onSubmitNewFood.emit({"name": newFoodName.value, "details":newFoodDetails.value, "calories": newFoodCalories.value});
    newFoodName.value = "";
    newFoodDetails.value = "";
    newFoodCalories.value = "";
  }
}
