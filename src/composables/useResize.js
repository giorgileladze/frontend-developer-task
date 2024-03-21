import { onMounted, onUnmounted } from 'vue';


const useResize = (handler) => {

    onMounted(() => {
        window.addEventListener('resize', handler);
    })


    onUnmounted(() => {
        window.removeEventListener('resize', handler)
    })

}

export { useResize }