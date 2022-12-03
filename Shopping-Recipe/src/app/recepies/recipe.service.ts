import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinListService } from '../shopping-list/shopping-list.service';
import { Recepie } from './recepie.model';

@Injectable()
export class RecipeService {
  private recipes: Recepie[] = [
    new Recepie(
      'Teszt recepie',
      'Teszt description',
      'https://static01.nyt.com/images/2021/11/21/dining/09EasyWeeknight-Roundup-top-art/merlin_195006771_cae41629-d1c8-4ae3-8d18-c32b67d1ecc0-superJumbo.jpg?quality=75&auto=webp',
      [new Ingredient('Meat', 1), new Ingredient('Franch Fries', 20)]
    ),
    new Recepie(
      'Teszt recepie',
      'Teszt description',
      'https://static01.nyt.com/images/2021/11/21/dining/09EasyWeeknight-Roundup-top-art/merlin_195006771_cae41629-d1c8-4ae3-8d18-c32b67d1ecc0-superJumbo.jpg?quality=75&auto=webp',
      [new Ingredient('Buns', 1), new Ingredient('Franch Fries', 20)]
    ),
  ];

  constructor(private slService: ShoppinListService) {}

  getRecipes() {
    return this.recipes.slice(); //Copy this list not the ref.
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
