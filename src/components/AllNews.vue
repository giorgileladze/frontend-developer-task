<script setup>
import { computed, ref } from 'vue';
import ClockIcon from '@/components/icons/ClockIcon.vue'

// since no api was provided to fetch data i am hardcoding data in a way that 
// it can be replaced asilly if api will be available
const news = ref([
    {
        date: '02.01.2023',
        time: '7:30',
        title: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
    }
])

const tempNews = computed(() => {
    // manualy multiply data since api is not available for fetch
    return new Array(20).fill(news.value[0]);
});
</script>

<template>
    <div class="my-6 w-full lg:w-[450px] xl:w-[280px] bg-interface-white rounded-2xl max-h-[330px] xl:max-h-[620px]">
        <h2 class="px-4 py-8">ყველა სიახლე</h2>
        <div class="overflow-auto xl:max-h-[500px] max-h-[225px]">
            <div v-for="{title, date, time} in tempNews" class="px-3 py-4">
                <span class="text-[12px] flex text-primary-blue font-bold gap-2">
                    <ClockIcon class="pt-1"/>
                    {{ time }} . {{ date }}</span>
                    <p class="text-[14px] w-[80%]">
                        {{ title }}
                    </p>
            </div>
        </div>
    </div>
</template>