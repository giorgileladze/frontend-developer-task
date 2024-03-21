<script setup>
import Logo from '@/components/icons/Logo.vue' 
import { computed, onMounted, ref, watch } from 'vue';
import SearchIcon from './icons/SearchIcon.vue';
import MenuIcon from './icons/MenuIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
import FaceBookIcon from './icons/FaceBookIcon.vue';
import { useResize } from '@/composables/useResize';
import ArrowDown from './icons/ArrowDown.vue';

const categories = ref([
    'პოლიტიკა',
    'საზოგადოება',
    'სამართალი',
    'ბიზნესი & ეკონომიკა',
    'ეკონომიკა',
    'რელიგია',
    'კულტურა',
    'განათლება'
])
const categoriesref = ref(null);
const isMenuOpen = ref(false);
const isSearchOpen = ref(false);
const counter = ref(0);
const currentwidth = ref(0);
const showHiddenCategories = ref(false);
const activeCategory = ref(categories.value[0]); // generally using id for that logic

const handleResize = () => {
    const w = categoriesref.value.offsetWidth;
    currentwidth.value = w;
}

const calculateWIdth = () => {
    const w = currentwidth.value || categoriesref.value.offsetWidth;
    let totalWidth = 32;
    let cur = 0;
    categories.value.forEach(str => {
        if(totalWidth < w){
            totalWidth += str.length * 16 + 32;
            cur++;
        }
    })
    counter.value = cur;
    currentwidth.value = categoriesref.value.offsetWidth;
}

useResize(handleResize);

watch(currentwidth, () => {
    calculateWIdth();
})

onMounted(() => calculateWIdth());

const visibleCategories = computed(() => {
    return categories.value.slice(0, counter.value);
})

const hiddenCategories = computed(() => {
    return categories.value.slice(counter.value)
});

</script>

<template>
    <header class="h-[80px] lg:h-[112px] bg-interface-white flex justify-between p-4 lg:py-8 lg:px-12 2xl:px-[204px]">
        <div :class="{
            'hidden': isSearchOpen,
        }"
            class="lg:flex gap-8"
        >
            <Logo class="translate-y-2" />
            <div class="hidden xl:flex">
                <nav class="m-auto">
                    <ul ref="categoriesref" class="flex flex-row gap-8 2xl:w-[800px] xl:w-[690px]">
                        <li v-for="category in visibleCategories" class="m-0" @click="activeCategory = category">
                            <h2 class="text-[16px]" 
                                :class="{'text-primary-blue': category === activeCategory}"
                                >
                                <a :href="'#' + category">
                                    {{ category }}
                                </a>
                            </h2>
                        </li>
                        <li v-if="hiddenCategories.length > 0" class="flex gap-1 relative text-[16px] font-bold" @click="showHiddenCategories = !showHiddenCategories">
                            
                            <span class="hover:cursor-pointer" :class="{'text-primary-blue': showHiddenCategories}">სხვა</span>
                            <ArrowDown class="m-auto hover:cursor-pointer" :class="{'text-primary-blue': showHiddenCategories}"/>
                            
                            <div v-show="hiddenCategories.length > 0 && showHiddenCategories" class="text-nowrap w-auto absolute bg-interface-white rounded-[16px] p-5 top-6 z-20">
                                <li v-for="category in hiddenCategories" class="my-4" @click="activeCategory = category">
                                    <h2 class="text-[16px]" 
                                        :class="{'text-primary-blue': category === activeCategory}"
                                        >
                                        <a :href="'#' + category">
                                            {{ category }}
                                        </a>
                                    </h2>
                                </li>
                            </div>

                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="flex gap-2 justify-between">
            <InstagramIcon class="hidden lg:flex m-auto" />
            <FaceBookIcon class="hidden lg:flex m-auto" />
            <div class="flex gap-2 relative">
                <input placeholder="ძიება" 
                    :class="{
                        'block': isSearchOpen,
                        'hidden': !isSearchOpen
                        }"
                    class="lg:block bg-primary-gray w-[224px] h-12 rounded-[64px] text-interface-blue placeholder:text-interface-blue ml-2 px-4 py-3 outline-primary-blue" 
                />
                <SearchIcon @click="isSearchOpen = !isSearchOpen" class="lg:absolute lg:right-1 lg:w-9 lg:h-9 lg:top-1" />
            </div>
            <MenuIcon @click="isMenuOpen = !isMenuOpen" class="lg:hidden" />
        </div>
        <div id="mobile-menu" 
            :class="{
                'hidden': !isMenuOpen,
                'menu-active': isMenuOpen
            }"
            class="fixed top-[80px] left-0 right-0 bg-interface-white w-full h-screen lg:hidden px-4 pt-4 z-10"
        >
            <nav>
                <ul>
                    <li v-for="category in categories" class="my-8" @click="() => {isMenuOpen = false; activeCategory = category}">
                        <h2 class="text-[16px]"
                            :class="{'text-primary-blue': category === activeCategory}"    
                        >
                            <a :href="'#' + category">
                                {{ category }}
                            </a>
                        </h2>
                    </li>
                </ul>
            </nav>
            <div id="mobile-menu-icons" class="flex gap-2 justify-center m-10">
                <InstagramIcon class="m-0"/>
                <FaceBookIcon class="m-0" />
            </div>
        </div>
    </header>
</template>