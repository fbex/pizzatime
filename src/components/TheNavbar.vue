<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="@/assets/logo.png" width="112" height="28"/>
        </router-link>

        <a
            role="button"
            class="navbar-burger"
            :class="burgerMenuActive ? 'is-active' : ''"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarItems"
            @click="toggleBurgerMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarItems" class="navbar-menu" :class="burgerMenuActive ? 'is-active' : ''">
        <div class="navbar-start">
          <router-link
              class="navbar-item"
              to="/calculator"
              @click="closeBurgerMenu"
          >Dough Calculator
          </router-link
          >
          <router-link class="navbar-item" to="/about" @click="closeBurgerMenu">About</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                  class="button"
                  href="https://github.com/fbex/pizzatime"
                  target="_blank"
                  @click="closeBurgerMenu"
              >
                <span class="icon"><i class="fab fa-github"></i></span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "TheNavbar",
  data() {
    return {
      burgerMenuActive: false
    }
  },
  methods: {
    toggleBurgerMenu() {
      this.burgerMenuActive = !this.burgerMenuActive;
    },
    closeBurgerMenu() {
      this.burgerMenuActive = false;
    }
  }
})
</script>
