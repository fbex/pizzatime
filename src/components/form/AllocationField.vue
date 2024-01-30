<template>
  <div class="field">
    <label class="label" :class="labelCenteredClass">{{ label }}</label>
    <div class="control">
      <BaseOutput class="output" :disabled="disabled"
        >{{ leftOutputValue }}
      </BaseOutput>
      <BaseInputRange
        class="slider"
        v-model.number="value"
        :min="0"
        :max="100"
        :step="1"
        :disabled="disabled"
      />
      <BaseOutput class="output" :disabled="disabled"
        >{{ rightOutputValue }}
      </BaseOutput>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInputRange from "@/components/base/BaseInputRange.vue";
import BaseOutput from "@/components/base/BaseOutput.vue";

export default defineComponent({
  name: "AllocationField",
  components: { BaseOutput, BaseInputRange },
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    labelCentered: {
      type: Boolean,
      required: true
    },

    totalAmount: {
      type: Number,
      required: true
    },
    leftBoundry: {
      type: Number,
      required: true
    },
    rightBoundry: {
      type: Number,
      required: true
    },

    valueAnnotation: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  methods: {
    formatOutput(value: number): string {
      return this.valueAnnotation
        ? `${value} ${this.valueAnnotation}`
        : `${value}`;
    }
  },
  computed: {
    value: {
      get(): number | undefined {
        return this.modelValue;
      },
      set(value: number) {
        this.$emit("update:modelValue", value);
      }
    },
    rightOutputValue(): string | undefined {
      const rightAllocation = this.totalAmount * (this.modelValue / 100);
      const rightRatio = (rightAllocation * 100) / this.rightBoundry;
      return this.formatOutput(rightRatio);
    },
    leftOutputValue(): string | undefined {
      const percentage = 100 - this.modelValue;
      const leftAllocation = this.totalAmount * (percentage / 100);
      const leftRatio = (leftAllocation * 100) / this.leftBoundry;
      return this.formatOutput(leftRatio);
    },
    labelCenteredClass(): object {
      return { "is-flex is-justify-content-center": this.labelCentered };
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
  margin-left: 0.75rem
  margin-right: 0.75rem

.output
  height: 100%
</style>
