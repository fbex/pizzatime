<template>
  <input
    type="range"
    class="slider"
    v-model.number="value"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInputRange",
  props: {
    modelValue: Number,
    min: Number,
    max: Number,
    step: Number,
    disabled: Boolean
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

<style scoped lang="sass">
@import "~bulma/sass/utilities/_all.sass"

// see: https://github.com/Wikiki/bulma-slider

$slider-radius: $radius !default
$slider-track-background: $grey-lighter !default
$slider-track-radius: $radius !default
$slider-track-border: 0px solid $grey !default
$slider-track-shadow: 0px 0px 0px $grey !default
$slider-thumb-background: $white !default
$slider-thumb-radius: $radius !default
$slider-thumb-border: 1px solid $grey-light !default
$slider-thumb-shadow: none !default
$slider-thumb-to-track-ratio: 2 !default

=slider-size($size)
  $track-height: $size / $slider-thumb-to-track-ratio
  $thumb-size: $size

  min-height: calc((#{$size} + 2px) * 1.25)

  &::-webkit-slider-runnable-track
    height: $track-height

  &::-moz-range-track
    height: $track-height

  &::-ms-track
    height: $track-height

  &::-webkit-slider-thumb
    height: $thumb-size
    width: $thumb-size

  &::-moz-range-thumb
    height: $thumb-size
    width: $thumb-size

  &::-ms-thumb
    height: $thumb-size
    width: $thumb-size
    margin-top: 0

  &::-webkit-slider-thumb
    margin-top: -($thumb-size / 4)

.slider
  appearance: none
  margin: 1rem 0
  background: transparent
  touch-action: none

  &.is-fullwidth
    display: block
    width: 100%

  &:focus
    outline: none

  &::-webkit-slider-runnable-track
    width: 100%

  &::-moz-range-track
    width: 100%

  &::-ms-track
    width: 100%

  &::-webkit-slider-runnable-track
    cursor: pointer
    animate: 0.2s
    box-shadow: $slider-track-shadow
    background: $slider-track-background
    border-radius: $slider-track-radius
    border: $slider-track-border

  &::-moz-range-track
    cursor: pointer
    animate: 0.2s
    box-shadow: $slider-track-shadow
    background: $slider-track-background
    border-radius: $slider-track-radius
    border: $slider-track-border

  &::-ms-track
    cursor: pointer
    animate: 0.2s
    box-shadow: $slider-track-shadow
    background: $slider-track-background
    border-radius: $slider-track-radius
    border: $slider-track-border

  &::-ms-fill-lower
    background: $grey-lighter
    border-radius: $slider-radius

  &::-ms-fill-upper
    background: $grey-lighter
    border-radius: $slider-radius

  &::-webkit-slider-thumb
    box-shadow: $slider-thumb-shadow
    border: $slider-thumb-border
    border-radius: $slider-thumb-radius
    background: $slider-thumb-background
    cursor: pointer

  &::-moz-range-thumb
    box-shadow: $slider-thumb-shadow
    border: $slider-thumb-border
    border-radius: $slider-thumb-radius
    background: $slider-thumb-background
    cursor: pointer

  &::-ms-thumb
    box-shadow: $slider-thumb-shadow
    border: $slider-thumb-border
    border-radius: $slider-thumb-radius
    background: $slider-thumb-background
    cursor: pointer

  &::-webkit-slider-thumb
    appearance: none

  &.is-circle
    &::-webkit-slider-thumb
      border-radius: $radius-rounded

    &::-moz-range-thumb
      border-radius: $radius-rounded

    &::-ms-thumb
      border-radius: $radius-rounded

  &:active
    &::-webkit-slider-thumb
      transform: scale(1.25)

    &::-moz-range-thumb
      transform: scale(1.25)

    &::-ms-thumb
      transform: scale(1.25)

  &:disabled
    opacity: 0.5
    cursor: not-allowed

    &::-webkit-slider-thumb
      cursor: not-allowed
      transform: scale(1)

    &::-moz-range-thumb
      cursor: not-allowed
      transform: scale(1)

    &::-ms-thumb
      cursor: not-allowed
      transform: scale(1)

  +slider-size($size-normal)

  &.is-small
    +slider-size($size-small)

  &.is-medium
    +slider-size($size-medium)

  &.is-large
    +slider-size($size-large)

  @each $name, $pair in $colors
    $color: nth($pair, 1)
    $color-invert: nth($pair, 2)

    &.is-#{$name}
      &::-moz-range-track
        background: $color !important

      &::-webkit-slider-runnable-track
        background: $color !important

      &::-ms-track
        background: $color !important

      &::-ms-fill-lower
        background: $color

      &::-ms-fill-upper
        background: $color
</style>
