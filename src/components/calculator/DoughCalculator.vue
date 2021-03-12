<template>
  <div class="columns is-variable is-8-desktop">
    <div class="column is-4">
      <div class="box">
        <IngredientsModifier :ingredients="ingredients" />
      </div>
    </div>

    <div class="column is-4">
      <div class="box">
        <OptionsModifier v-model="options" @calculate="onCalculate" />
      </div>
    </div>

    <div class="column is-4" v-if="showRecipe">
      <div class="box">
        <ResultRecipe :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IngredientsModifier from "@/components/calculator/DoughCalculatorIngredients.vue";
import ResultRecipe from "@/components/calculator/DoughCalculatorRecipe.vue";
import {
  Ingredient,
  Ingredients,
  PizzaOptions,
  Recipe,
  RecipeIngredient
} from "@/components/calculator/model";
import OptionsModifier from "@/components/calculator/DoughCalculatorOptions.vue";

export default defineComponent({
  name: "DoughCalculator",
  components: { OptionsModifier, ResultRecipe, IngredientsModifier },
  data() {
    return {
      options: {
        numberOfPizzas: 4,
        weightPerPizza: 250
      } as PizzaOptions,

      ingredients: {
        flour: {
          label: "Flour",
          placeholder: "Percentage of flour",
          percentage: 100,
          included: true,
          locked: true
        } as Ingredient,
        water: {
          label: "Water (Hydration)",
          placeholder: "Percentage of water",
          percentage: 65,
          included: true,
          locked: false
        } as Ingredient,
        yeast: {
          label: "Yeast",
          placeholder: "Percentage of yeast",
          percentage: 1,
          included: true,
          locked: false
        } as Ingredient,
        salt: {
          label: "Salt",
          placeholder: "Percentage of salt",
          percentage: 3,
          included: true,
          locked: false
        } as Ingredient,
        oil: {
          label: "Oil",
          placeholder: "Percentage of oil",
          percentage: 0,
          included: false,
          locked: false
        } as Ingredient,
        sugar: {
          label: "Sugar",
          placeholder: "Percentage of sugar",
          percentage: 0,
          included: false,
          locked: false
        } as Ingredient
      } as Ingredients,

      recipe: undefined as Recipe | undefined
    };
  },
  methods: {
    onCalculate() {
      const total = this.options.numberOfPizzas * this.options.weightPerPizza;
      const includedIngredients = Object.values(this.ingredients).filter(
        ingredient => ingredient.included
      );
      const percentageSum = includedIngredients
        .map(ingredient => ingredient.percentage)
        .reduce((sum, current) => sum + current);
      const totalFlour = total / (percentageSum / 100);
      const recipeIngredients: RecipeIngredient[] = includedIngredients.map(
        ingredient => ({
          name: ingredient.label,
          amount: (ingredient.percentage / 100) * totalFlour
        })
      );
      this.recipe = {
        numberOfPizzas: this.options.numberOfPizzas,
        weightPerPizza: this.options.weightPerPizza,
        ingredients: recipeIngredients
      };
    }
  },
  computed: {
    showRecipe(): boolean {
      return this.recipe != undefined;
    }
  }
});
</script>
