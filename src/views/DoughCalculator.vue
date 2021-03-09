<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Pizza dough calculator</h1>
      <h2 class="subtitle">
        The dough calculator uses <strong>baker percentage</strong> to indicate
        the proportion of ingredients.<br />
        This means that every ingredient is relative to the total amount of
        flour used in the dough.<br />
        To learn more about baker's percentage refer to
        <a href="https://en.wikipedia.org/wiki/Baker_percentage" target="_blank"
          >Wikipedia</a
        >.
      </h2>
      <Calculator />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Calculator from "@/components/calculator/Calculator.vue";

export default defineComponent({
  name: "DoughCalculator",
  components: { Calculator }
});
</script>

<style scoped></style>
