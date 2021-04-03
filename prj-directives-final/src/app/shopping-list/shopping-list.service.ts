import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingridientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  
  constructor() {
   }

   getIngridients(): Ingredient[]
   {
     return this.ingredients.slice();
   }
   
   addIngridient(ingridient: Ingredient): void {
     this.ingredients.push(ingridient);
     this.ingridientChanged.emit(this.ingredients.slice());
   }
   addIngridients(ingridients: Ingredient[]): void {
  //  for(let ing of ingridients)
  //  {
  //    this.addIngridient(ing);
  //  }
   this.ingredients.push(...ingridients);
    this.ingridientChanged.emit(this.ingredients.slice());
  }
  }
