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
        <ResultRecipe :recipe="recipe!" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IngredientsModifier from "@/components/calculator/DoughCalculatorIngredients.vue";
import ResultRecipe from "@/components/calculator/DoughCalculatorRecipe.vue";
import {
  type Ingredient,
  type Ingredients,
  type PizzaOptions,
  type Recipe,
  type RecipeIngredient
} from "@/components/calculator/model";
import OptionsModifier from "@/components/calculator/DoughCalculatorOptions.vue";

export default defineComponent({
  name: "DoughCalculator",
  components: { OptionsModifier, ResultRecipe, IngredientsModifier },
  data() {
    return {
      options: {
        numberOfPizzas: 4,
        weightPerPizza: 275
      } as PizzaOptions,

      ingredients: {
        flour: {
          label: "Flour",
          placeholder: "Percentage of flour",
          isRequired: true,
          locked: true,
          minValue: 0,
          maxValue: 100,
          stepSize: 1,
          included: true,
          percentage: 100
        } as Ingredient,
        water: {
          label: "Water (Hydration)",
          placeholder: "Percentage of water",
          isRequired: true,
          locked: false,
          minValue: 0,
          maxValue: 100,
          stepSize: 1,
          included: true,
          percentage: 70
        } as Ingredient,
        yeast: {
          label: "Yeast",
          placeholder: "Percentage of yeast",
          isRequired: true,
          locked: false,
          minValue: 0,
          maxValue: 1,
          stepSize: 0.01,
          included: true,
          percentage: 0.1
        } as Ingredient,
        salt: {
          label: "Salt",
          placeholder: "Percentage of salt",
          isRequired: true,
          locked: false,
          minValue: 0,
          maxValue: 5,
          stepSize: 0.1,
          included: true,
          percentage: 3.4
        } as Ingredient,
        oil: {
          label: "Oil",
          placeholder: "Percentage of oil",
          isRequired: false,
          locked: false,
          minValue: 0,
          maxValue: 5,
          stepSize: 0.1,
          included: true,
          percentage: 3.4
        } as Ingredient,
        sugar: {
          label: "Sugar",
          placeholder: "Percentage of sugar",
          isRequired: false,
          locked: false,
          minValue: 0,
          maxValue: 5,
          stepSize: 0.1,
          included: true,
          percentage: 1.5
        } as Ingredient,
        semola: {
          label: "Semola",
          placeholder: "Percentage of semola",
          isRequired: false,
          locked: false,
          minValue: 0,
          maxValue: 100,
          stepSize: 1,
          included: false,
          percentage: 0
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
