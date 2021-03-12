<template>
  <h4 class="title is-4">Choose your options</h4>
  <BaseInputNumber
    label="Number of pizzas"
    placeholder="Number of pizzas"
    v-model.number="numberOfPizzas"
  ></BaseInputNumber>
  <BaseInputNumber
    label="Weight per pizza (g)"
    placeholder="Weight per pizza (g)"
    v-model.number="weightPerPizza"
  ></BaseInputNumber>
  <div class="control">
    <button class="button is-link" @click="onCalculate">Calculate</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PizzaOptions } from "@/components/calculator/model";
import BaseInputNumber from "@/components/calculator/BaseInputNumber.vue";

export default defineComponent({
  name: "DoughCalculatorOptions",
  components: { BaseInputNumber },
  props: {
    modelValue: {
      type: Object as PropType<PizzaOptions>
    }
  },
  emits: ["update:modelValue", "calculate"],
  methods: {
    onCalculate() {
      this.$emit("calculate");
    }
  },
  computed: {
    numberOfPizzas: {
      get(): number | undefined {
        return this.modelValue?.numberOfPizzas;
      },
      set(value: number) {
        this.$emit("update:modelValue", {
          ...this.modelValue,
          numberOfPizzas: value
        });
      }
    },

    weightPerPizza: {
      get(): number | undefined {
        return this.modelValue?.weightPerPizza;
      },
      set(value: number) {
        this.$emit("update:modelValue", {
          ...this.modelValue,
          weightPerPizza: value
        });
      }
    }
  }
});
</script>
