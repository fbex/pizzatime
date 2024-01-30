<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
        :placeholder="placeholder"
        v-model.number="value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInputNumber",
  props: {
    modelValue: Number,
    label: String,
    placeholder: String
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get(): number | undefined {
        return this.modelValue;
      },
      set(value: number) {
        this.$emit("update:modelValue", value);
      }
    }
  }
});
</script>
