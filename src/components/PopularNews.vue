<script setup>
import { computed, ref } from 'vue';
import ClockIcon from '@/components/icons/ClockIcon.vue'

// since no api was provided to fetch data i am hardcoding data in a way that 
// it can be replaced asilly if api will be available
const news = ref([
    {
        title: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
        img: 'src/assets/images/pic1.png'
    },
    
])

const tempNews = computed(() => {
    // manualy multiply data since api is not available for fetch
    return new Array(15).fill(news.value[0]);
})

</script>

<template>
    <div class="my-6 w-full lg:w-[450px] xl:w-[280px] bg-interface-white rounded-2xl max-h-[330px] xl:max-h-[620px]">
        <h2 class="px-3 py-8">პოპულარული</h2>
        <div class="overflow-auto xl:max-h-[500px] max-h-[225px]">
            <div v-for="{title, img} in tempNews" class="px-3 py-4 flex gap-2">
                <img :src="img" class="w-[96px] h-[96px]" />
                <p class="text-[14px]">
                    {{ title }}
                </p>
            </div>
        </div>
    </div>
</template>