<template>
  <div class="main">
    <header class="header">
      <el-row class="nav" :gutter="10">
       <el-col :span="4">
         <a href="" class="banner">
           <img src="./assets/logo.png" alt="Lollipop Studio" class="logo">
           <span style="font-size: 1.3rem; font-weight: 500">Lollipop Studio</span>
         </a>
       </el-col>
        <el-col :span="16"></el-col>
        <router-link to="/" custom v-slot="{ href, isExactActive }" replace>
          <el-col class="page" :span="2" :class="[isExactActive && 'active']">
            <a :href="href">
              <span class="text">Home</span>
            </a>
          </el-col>
        </router-link>
        <router-link to="/projects" custom v-slot="{ href, isExactActive }" replace>
          <el-col class="page" :span="2" :class="[isExactActive && 'active']">
            <a :href="href">
              <span class="text">Projects</span>
            </a>
          </el-col>
        </router-link>
      </el-row>

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
