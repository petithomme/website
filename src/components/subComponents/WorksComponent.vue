<template>

    <div>
        <p class="description"> {{ this.description }} </p>

        <carousel v-bind="settings">
            <slide v-for="i in this.images" :key="i">
               <img :src="require(`@/assets/${this.path.toLowerCase()}/${i}.png`)"
                    alt="" class="carousel__item"/>
            </slide>

            <template #addons>
                <pagination />
            </template>
        </carousel>


        <p class="description">
            <H2>Fullstack developer </H2>
            <H5>Backend : NodeJs/ Express / Typescript - Jest - PostgreSQL</H5>
            <H5>Frontend : React / Redux / Typescript - Jest - Storybook - Mui </H5>
        </p>
    </div>

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
           "path", "description", "images"
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

    .description {
        width: 60%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 1rem;
        text-align: center;
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
        padding: 2rem;
        margin-top: -2rem;
    }

</style>
