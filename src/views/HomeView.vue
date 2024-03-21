<script setup>
import Hero from '@/components/Hero.vue'
import PopularNews from '@/components/PopularNews.vue'
import AllNews from '@/components/AllNews.vue'
import KnownFacts from '@/components/KnownFacts.vue'
import Articles from '@/components/Articles.vue'


</script>

<template>
    <div class="relative">
        <Hero />
        <div class="absolute top-0 right-0 hidden xl:block">
            <AllNews />
            <PopularNews />
        </div>
        <div class="xl:w-[840px] 4xl:w-[980px] h-screen">
            <div class="xl:hidden flex justify-between flex-col lg:flex-row">
                <AllNews />
                <PopularNews />
            </div>
            <KnownFacts />
            <Articles />
        </div>
    </div>
</template>