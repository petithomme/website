<template>

    <carousel v-bind="settings">
        <slide v-for="i in 6" :key="i">
           <img :src="`http://william-libert.com/public/everreal/1.png`"
                alt="" class="carousel__item"/>
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>


</template>

<script>

    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    export default {
        name: "WorksComponent",
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
        props: [
           "path"
        ],
        data() {
            return {
                settings: {
                    itemsToShow: 1,
                },
                value: 0,
            }
        }
    }
</script>

<style scoped>

    .carousel__slide {
        padding: 100px;
    }

    .carousel__item {
        min-height: 200px;
        width: 50%;
        background-color: var(--vc-clr-primary);
        color: var(--vc-clr-white);
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel__slide {
        padding: 10px;
    }

    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
        padding-right: 100px;
    }
</style>
