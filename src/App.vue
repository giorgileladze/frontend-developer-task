<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

</script>

<template>
    <Header />
    <main class="2xl:px-[204px] lg:px-[56px] mx-2 mt-10">
        <RouterView />
    </main>
</template>