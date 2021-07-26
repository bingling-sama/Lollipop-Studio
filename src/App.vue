<template>
  <div class="main">
    <header class="header">
      <ul class="nav">
        <li>
          <a href="" class="banner">
            <img src="./assets/logo.png" alt="Lollipop Studio" class="logo">
            <span style="font-size: 1.3rem; font-weight: 500">Lollipop Studio</span>
          </a>
        </li>
        <li style="width: 60%;height: 50px;"></li>
        <router-link to="/" custom v-slot="{ href, isExactActive }">
          <li class="page" :class="[isExactActive && 'active']">
            <a :href="href + '.html'">
              <span class="text">Home</span>
            </a>
          </li>
        </router-link>

        <router-link to="/projects" custom v-slot="{ href, isExactActive }">
          <li class="page" :class="[isExactActive && 'active']">
            <a :href="href + '.html'">
              <span class="text">Projects</span>
            </a>
          </li>
        </router-link>

      </ul>
    </header>
    <router-view class="content"></router-view>
    <footer class="footer">

    </footer>
  </div>
</template>

<script setup>
</script>

<style>
@import "./assets/css/index.css";
</style>
