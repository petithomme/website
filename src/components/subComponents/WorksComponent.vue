<template>

    <carousel :items-to-show="1.5">
        <slide v-for="i in 5" :key="i">
           <img :src="require(`@/assets/${this.path.toLowerCase()}/${i}.png`)"
                alt="" class="bg-grey-lighten-2"/>
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
                value: 0,
            }
        }
    }
</script>

<style scoped>


</style>
