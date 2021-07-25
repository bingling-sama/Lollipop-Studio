<template>
  <div id="app" class="main">
    <nav class="header">
<!--      <div>-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"-->
<!--             style="fill: rgba(0, 0, 0, 1);">-->
<!--          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>-->
<!--          <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path>-->
<!--          <path d="M15 15 L24 24 Z" stroke="rgba(0, 0, 0, 1)" stroke-width="2"></path>-->
<!--        </svg>-->
<!--      </div>-->
      <div>
        <ul style="display: flex">
          <router-link to="/" custom v-slot="{ href, isExactActive }">
            <li :class="[isExactActive && 'active']">
              <a :href="href">
                <span class="text">Home</span>
              </a>
            </li>
          </router-link>
          <li>
            <a>
              <span class="text">Project</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
@import "./assets/css/index.css";

#app {
  font-family: "Cascadia Code", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
