<template>
  <h4 class="title is-4">Your recipe</h4>
  <p class="label">
    {{ recipe.numberOfPizzas }} pizzas with {{ recipe.weightPerPizza }} g
  </p>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Ingredient</th>
        <th class="has-text-right">Amount</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Total</th>
        <th class="has-text-right">{{ round(total) }} g</th>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="ingredient in recipe.ingredients" :key="ingredient.name">
        <td>{{ ingredient.name }}</td>
        <td class="has-text-right">{{ round(ingredient.amount) }} g</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { type Recipe } from "@/components/calculator/model";

function roundToDigits(float: number, digits: number): number {
  const rounded = Math.pow(10, digits);
  return Math.round(float * rounded) / rounded;
}

export default defineComponent({
  name: "DoughCalculatorRecipe",
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      required: true
    }
  },
  methods: {
    round(value: number): string {
      return roundToDigits(value, 2).toFixed(2);
    }
  },
  computed: {
    total(): number {
      return this.recipe.ingredients
        .map(ingredient => roundToDigits(ingredient.amount, 1))
        .reduce((sum, current) => sum + current);
    }
  }
});
</script>

<style scoped></style>
