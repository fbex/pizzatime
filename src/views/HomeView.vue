<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="@/assets/pizza.png" width="64" height="64" alt="Pizza icon"/>
        <p class="title">
          Pizzatime
        </p>
        <p class="subtitle">The pizza dough calculator</p>
        <button class="button is-link" @click="$router.push('calculator')">Get Started!</button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
