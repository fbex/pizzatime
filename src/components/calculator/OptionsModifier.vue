<template>
  <h4 class="title is-4">Choose your options</h4>
  <NumberInput
    label="Number of pizzas"
    placeholder="Number of pizzas"
    v-model.number="numberOfPizzas"
  ></NumberInput>
  <NumberInput
    label="Weight per pizza (g)"
    placeholder="Weight per pizza (g)"
    v-model.number="weightPerPizza"
  ></NumberInput>
  <div class="control">
    <button class="button is-link" @click="onCalculate">Calculate</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PizzaOptions } from "@/components/calculator/model";
import NumberInput from "@/components/calculator/NumberInput.vue";

export default defineComponent({
  name: "OptionsModifier",
  components: { NumberInput },
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

<style scoped></style>
