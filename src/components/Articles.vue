<script setup>
import { ref } from 'vue';
import pic1 from '@/assets/images/pic1.png';
import pic2 from '@/assets/images/pic2.png';
import pic3 from '@/assets/images/pic3.png';
import pic4 from '@/assets/images/pic4.png';
import pic5 from '@/assets/images/pic5.png';

// since api is not provided i am hardcodding data in a way that it is reactive and will be easy
// to change if api will be available in the future
const articles = ref([
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
        date: '12.08.2023',
        category: 'პოლიტიკა',
        img: pic5
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
        date: '12.08.2023',
        category: 'პოლიტიკა',
        img: pic1
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
        date: '12.08.2023',
        category: 'პოლიტიკა',
        img: pic3
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
        date: '12.08.2023',
        category: 'პოლიტიკა',
        img: pic4
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
        date: '12.08.2023',
        category: 'პოლიტიკა',
        img: pic2
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
        date: '12.08.2023',
        category: 'პოლიტიკა',
        img: pic3
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
        date: '12.08.2023',
        category: 'პოლიტიკა',
        img: pic4
    }
])
</script>


<template>
    <div class="grid sm:grid-cols-3 gap-x-5 gap-y-6 mt-10 pb-10">
        <div v-for="({title, date, category, img}, index) in articles"
        :class="{
            'row-span-2': index % 5 === 1,
        }"
        class="h-full bg-interface-white p-2 rounded-[16px]"
        >
            <img :src="img" class="w-full"/>
            <div class="my-2">
                <span class="mr-2 font-bold h-4 text-[12px] text-interface-blue rounded-2xl px-2 py-[6px] bg-primary-gray">{{ date }}</span>
                <span class="h-4 font-bold text-[12px] text-interface-blue rounded-2xl px-2 py-[6px] bg-primary-gray">{{ category }}</span>
            </div>
            <h3>{{ index % 5 !== 1 ? title.slice(0, 30) : title }}</h3>
        </div>
    </div>
</template>