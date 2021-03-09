<template>
  <section class="section">
    <div class="container">
      <HomeComponent msg="This will be the Home" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeComponent from "@/components/HomeComponent.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HomeComponent
  }
});
</script>
