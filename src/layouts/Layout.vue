<script setup>
import { ref, provide } from "vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>

<template>
    <div class="layout-wrapper flex flex-col min-h-screen">
        <div class="layout-main-container flex flex-col flex-1">
            <div class="layout-main flex-1 m-24 mt-5">
                <RouterView />
            </div>
        </div>
    </div>
</template>