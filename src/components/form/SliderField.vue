<template>
  <div class="field">
    <label class="label"
      >{{ label }}
      <button
        class="delete is-small delete-btn"
        v-if="hasDeleteButton"
        @click="onDelete"
      ></button>
    </label>
    <div class="control">
      <BaseInputRange
        class="slider"
        v-model.number="value"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
      />
      <BaseOutput class="output" v-if="hasOutput" :disabled="disabled"
        >{{ outputValue }}
      </BaseOutput>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInputRange from "@/components/base/BaseInputRange.vue";
import BaseOutput from "@/components/base/BaseOutput.vue";

export default defineComponent({
  name: "SliderField",
  components: { BaseOutput, BaseInputRange },
  props: {
    modelValue: Number,
    label: String,
    hasOutput: Boolean,
    min: Number,
    max: Number,
    step: Number,
    valueAnnotation: String,
    disabled: Boolean,
    hasDeleteButton: Boolean
  },
  emits: ["update:modelValue", "delete"],
  computed: {
    value: {
      get(): number | undefined {
        return this.modelValue;
      },
      set(value: number) {
        this.$emit("update:modelValue", value);
      }
    },
    outputValue(): string {
      return this.valueAnnotation
        ? `${this.modelValue} ${this.valueAnnotation}`
        : `${this.modelValue}`;
    }
  },
  methods: {
    onDelete() {
      this.$emit("delete");
    }
  }
});
</script>

<style scoped lang="sass">
.label
  margin-bottom: 0

.control
  display: flex
  align-items: center

.slider
  flex-grow: 5
  margin-right: 0.75rem

.output
  height: 100%

.delete-btn
  margin-top: 0.25rem
  margin-left: 0.2rem
</style>
