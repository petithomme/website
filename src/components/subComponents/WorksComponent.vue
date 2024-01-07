<template>

    <carousel v-bind="settings">
        <slide v-for="i in 4" :key="i">
           <img :src="require(`@/assets/${this.path.toLowerCase()}/${i}.png`)"
                alt="" class="carousel__item"/>
        </slide>

        <template #addons>
            <pagination />
        </template>
    </carousel>


</template>

<script>

    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination } from 'vue3-carousel'

    export default {
        name: "WorksComponent",
        components: {
            Carousel,
            Slide,
            Pagination
        },
        props: [
           "path"
        ],
        data() {
            return {
                settings: {
                    itemsToShow: 1
                },
                value: 0,
            }
        }
    }
</script>

<style scoped>

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

</style>
