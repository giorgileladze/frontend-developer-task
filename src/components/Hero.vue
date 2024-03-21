<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore from 'swiper';
import { Navigation, Pagination, A11y } from "swiper/modules";
import AllNews from '@/components/AllNews.vue'
 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';
import pic1 from '@/assets/images/pic1.png';
import pic2 from '@/assets/images/pic2.png';
import pic3 from '@/assets/images/pic3.png';
import pic4 from '@/assets/images/pic4.png';

SwiperCore.use([Navigation, Pagination, A11y]);

const images = ref([
    pic1,
    pic2,
    pic3,
    pic4,
])

</script>

<template>
    <div class="max-w-screen bg-interface-white rounded-[20px] m-auto xl:mx-0 xl:w-[840px] 4xl:w-[980px]">
        <div class="px-3 py-4">
            <Swiper
            :slides-per-view="1"
            :space-between="50"
            :loop="true"
            :navigation="{
                nextEl: '.arrowRight-hero',
                prevEl: '.arrowLeft-hero'
            }"
            :pagination="{ clickable: true }">
                <SwiperSlide v-for="image in images" >
                    <img :src="image" class="w-full h-[280px] lg:h-[405px]"> 
                </SwiperSlide>
            <ArrowLeft class="hidden lg:block arrowLeft-hero absolute top-[40%] z-10"/>
            <ArrowRight class="hidden lg:block arrowRight-hero absolute top-[40%] right-0 z-10"/>
            </Swiper>
        </div>
        <div class="px-3 pb-8 pt-2">
            <div>
                <span class="mx-1 font-bold h-4 text-[12px] text-interface-blue rounded-2xl px-2 py-[6px] bg-primary-gray">12.08.2023</span>
                <span class="mx-1 font-bold h-4 text-[12px] text-interface-blue rounded-2xl px-2 py-[6px] bg-primary-gray">პოლიტიკა</span>
            </div>
            <h1 class="text-interface-blue">
                ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება
            </h1>
            <p class="text-[16px] text-interface-darkgray">
                განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD
            </p>
        </div>
    </div>
</template>