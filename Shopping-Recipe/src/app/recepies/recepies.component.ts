import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecipeService],
})
export class RecepiesComponent implements OnInit {
  selectedRecipe: Recepie;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recepie) => {
      this.selectedRecipe = recipe;
    });
  }
}
