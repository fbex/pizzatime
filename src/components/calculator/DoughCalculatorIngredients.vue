<template>
  <h4 class="title is-4">Ingredients</h4>

  <template v-for="ingredient in ingredients" :key="ingredient.order">
    <SliderField
      v-if="ingredient.included"
      v-model.number="ingredient.percentage"
      :label="ingredient.label"
      :min="ingredient.minValue"
      :max="ingredient.maxValue"
      :step="ingredient.stepSize"
      :disabled="ingredient.locked"
      :has-output="true"
      :has-delete-button="!ingredient.isRequired"
      value-annotation="%"
      @delete="toggleIncluded(ingredient)"
    ></SliderField>
  </template>

  <template v-for="ingredient in ingredients" :key="ingredient.label">
    <button
      v-if="!ingredient.included"
      @click="toggleIncluded(ingredient)"
      class="button is-rounded is-small is-light"
    >
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>{{ ingredient.label }}</span>
    </button>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Ingredient, Ingredients } from "@/components/calculator/model";
import SliderField from "@/components/form/SliderField.vue";

export default defineComponent({
  name: "DoughCalculatorIngredients",
  components: { SliderField },
  props: {
    ingredients: {
      type: Object as PropType<Ingredients>,
      required: true
    }
  },
  methods: {
    toggleIncluded(ingredient: Ingredient) {
      return (ingredient.included = !ingredient.included);
    }
  }
});
</script>
