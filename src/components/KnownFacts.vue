<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore from 'swiper';
import { Navigation, Pagination, A11y } from "swiper/modules";
import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import ArrowRight from '@/components/icons/ArrowRight.vue'
 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, A11y]);

// since no api was provided to fetch data i am hardcoding data in a way that 
// it can be replaced asilly if api will be available
const facts = ref([
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ',
        img: 'src/assets/images/pic5.png'
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ',
        img: 'src/assets/images/pic5.png'
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ',
        img: 'src/assets/images/pic5.png'
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ',
        img: 'src/assets/images/pic5.png'
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ',
        img: 'src/assets/images/pic5.png'
    },
    {
        title: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ',
        img: 'src/assets/images/pic5.png'
    }
])
</script>

<template>
    <div class="bg-interface-white rounded-[16px] px-6 py-7 lg:mt-8">
        <div class="flex justify-between mb-5 lg:mb-0">
            <h2>ცნობილი ფაქტები</h2>
            <div class="justify-between hidden lg:flex">
                <span class="prevArrow-facts m-auto">
                    <ArrowLeft />
                </span>
                <span class="nextArrow-facts m-auto">
                    <ArrowRight />
                </span>
            </div>
        </div>
        <div class="hidden lg:block">
            <Swiper
            :slides-per-view="3"
            :space-between="50"
            :navigation="{
                nextEl: '.nextArrow-facts',
                prevEl: '.prevArrow-facts'
            }"
            >
                <SwiperSlide v-for="fact in facts" class=" bg-primary-gray p-2 rounded-[16px]">
                        <img :src="fact.img" class="w-[288px] h-[120px]">
                        <p class="text-[14px] w-[240px]">{{ fact.title }}</p>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="lg:hidden m-auto">
            <Swiper
            :slides-per-view="1"
            :space-between="50"
            :navigation="{
                nextEl: '.nextArrow-facts',
                prevEl: '.prevArrow-facts'
            }"
            >
                <SwiperSlide v-for="fact in facts" class="w-[288px] bg-primary-gray py-2 rounded-[16px]">
                    <img :src="fact.img" class="w-[288px] h-[120px] m-auto">
                    <p class="w-[288px] m-auto">{{ fact.title }}</p>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>