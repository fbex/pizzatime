<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/calculator"
            >Dough Calculator</router-link
          >
          <router-link class="navbar-item" to="/about">About</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Recipes</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Poolish (Vito Iacopelli)</a>
              <a class="navbar-item">Direct Dough (Vincenzo)</a>
              <a class="navbar-item">Other</a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                class="button"
                href="https://github.com/fbex/pizzatime"
                target="_blank"
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar"
});
</script>
