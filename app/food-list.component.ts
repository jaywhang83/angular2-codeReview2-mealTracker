import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent} from './food.component';
import { NewFoodComponent} from './new-food-component';
import { CaloriesPipe } from './calories.pipe';
import { FoodDetailsComponent } from './show-food-details.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CaloriesPipe],
  directives: [FoodComponent, NewFoodComponent, FoodDetailsComponent, EditFoodDetailsComponent],
  template:
  `
  <select (change)="onChange($event.target.value)" class="filter">
	  <option value="all" selected="selected">Show All Foods</option>
	  <option value="healthy">Show Healthy Foods</option>
	  <option value="unhealthy">Show Unhealthy Foods</option>
	</select>

  <food-display *ngFor="#currentFood of foodList | calories: filterCalories"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>

  <details-display *ngIf="selectedFood" [food]="selectedFood">
  </details-display>

  <new-food (onSubmitNewFood)="createFood($event)"></new-food>

  <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
	</edit-food-details>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalories: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }

  foodClicked(clickedFood: Food): void {
    console.log("Child", clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }

  createFood(food: Object):void {
    this.foodList.push(
      new Food(food["name"], food["details"], food["calories"], this.foodList.length)
    );
  }

  onChange(filterOption) {
		this.filterCalories = filterOption;
		console.log(this.filterCalories);
	}
}
