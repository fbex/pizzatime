<template>
  <TheNavbar />
  <router-view />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheFooter from "@/components/TheFooter.vue";
import TheNavbar from "@/components/TheNavbar.vue";

export default defineComponent({
  components: { TheNavbar, TheFooter }
});
</script>
