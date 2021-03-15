export interface Ingredients {
  flour: Ingredient;
  water: Ingredient;
  yeast: Ingredient;
  salt: Ingredient;
  oil: Ingredient;
  sugar: Ingredient;
  semola: Ingredient;
}

export interface Ingredient {
  label: string;
  placeholder: string;
  isRequired: boolean;
  locked: boolean;
  minValue: number;
  maxValue: number;
  stepSize: number;
  included: boolean;
  percentage: number;
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
