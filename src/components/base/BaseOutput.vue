<template>
  <output class="output" :class="{ 'is-disabled': disabled }"
    ><slot></slot
  ></output>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseOutput",
  props: {
    disabled: Boolean
  }
});
</script>

<style scoped lang="sass">
@import "~bulma/sass/utilities/_all.sass"

// see: https://github.com/Wikiki/bulma-slider

$slider-output-width: 3.8rem !default
$slider-output-background: $grey-dark !default
$slider-output-radius: $radius !default

.output
  display: inline-block
  vertical-align: middle
  width: $slider-output-width
  background: $slider-output-background
  border-radius: $slider-output-radius
  padding: 0.4rem 0.8rem
  font-size: $size-7
  line-height: $size-7
  text-align: center
  text-overflow: ellipsis
  white-space: nowrap
  color: $white
  overflow: hidden
  pointer-events: none
  z-index: 200

  &.is-disabled
    opacity: 0.5

  @each $name, $pair in $colors
    $color: nth($pair, 1)
    $color-invert: nth($pair, 2)

    &.is-#{$name}
      background-color: $color
      color: $color-invert
</style>
