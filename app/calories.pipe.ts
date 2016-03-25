import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], args) {
    var caloriesLevel = args[0];
    if(caloriesLevel === "healthy") {
      return input.filter((food) => {
        return food.calories <= 300;
      });
    } else if(caloriesLevel === "unhealthy") {
      return input.filter((food) => {
        return food.calories > 300;
      });
    }
    else {
      return input; 
    }
  }
}
