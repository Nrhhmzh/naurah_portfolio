<script setup>
import { ref, provide } from "vue";
import { RouterView } from 'vue-router'; 
import TopBar from "./TopBar.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TopBarVue from "./TopBar.vue";

</script>

<template>
    <div class="layout-wrapper flex flex-col bg-[#111827] min-h-screen">
      <!-- Menu (Top Bar) -->
      <TopBarVue />
  
      <!-- Main Content -->
      <div class="layout-main flex-1">
        <RouterView /> <!-- This is where the routed components (pages) will be rendered -->
      </div>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>