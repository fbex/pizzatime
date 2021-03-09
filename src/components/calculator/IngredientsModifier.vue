<template>
  <h4 class="title is-4">Ingredients</h4>

  <template v-for="ingredient in ingredients" :key="ingredient.order">
    <div v-if="ingredient.included" class="field">
      <label class="label"
        >{{ ingredient.label }}
        <button
          class="delete is-small delete-btn"
          v-if="!ingredient.locked"
          @click="toggleIncluded(ingredient)"
        ></button>
      </label>
      <div class="control">
        <input
          class="input"
          type="number"
          :placeholder="ingredient.placeholder"
          :disabled="ingredient.locked"
          v-model.number="ingredient.percentage"
        />
      </div>
    </div>
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

export default defineComponent({
  name: "IngredientsModifier",
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

<style scoped>
.delete-btn {
  margin-top: 4px;
}
</style>
