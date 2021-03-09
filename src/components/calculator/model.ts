export interface Ingredients {
  flour: Ingredient;
  water: Ingredient;
  yeast: Ingredient;
  salt: Ingredient;
  oil: Ingredient;
  sugar: Ingredient;
}

export interface Ingredient {
  label: string;
  placeholder: string;
  percentage: number;
  included: boolean;
  locked: boolean;
}

export interface PizzaOptions {
  numberOfPizzas: number;
  weightPerPizza: number;
}

export interface Recipe {
  numberOfPizzas: number;
  weightPerPizza: number;
  ingredients: RecipeIngredient[];
}

export interface RecipeIngredient {
  name: string;
  amount: number;
}
