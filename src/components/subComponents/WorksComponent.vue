<template>

    <div>
        <p class="description"> {{ this.description }}
            <br>
            <a :href="this.link">{{ this.link }}</a>
        </p>
        <p class="description" v-if="subDescription">Game : {{ this.getSubdescription }} </p>
        <carousel v-bind="settings"  @slide-start="handleSlideStart">
            <slide v-for="i in this.images" :key="i">
               <img :src="require(`@/assets/${this.path.toLowerCase()}/${i}.png`)"
                    alt="" class="carousel__item"/>
            </slide>

            <template #addons>
                <pagination />
            </template>
        </carousel>


        <p class="description">
            <H2>{{ this.title }} </H2>
            <H5 v-if="this.backend">Backend : {{ this.backend }}</H5>
            <H5 v-if="this.frontEnd">Frontend : {{ this.frontEnd }} </H5>
            <H5 v-if="this.cicd">CI/CD : {{ this.cicd }} </H5>
            <H5 v-if="this.tools">Tools creation : {{ this.tools }} </H5>
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
           "path", "description", "images", "subDescription", "link", "title", "backend", "frontEnd", "cicd", "tools"
        ],
        methods: {
            handleSlideStart(data) {
                this.currentSlideIndex = data.slidingToIndex
            },
        },
        computed: {
            getSubdescription() {
                return this.subDescription[this.currentSlideIndex]
            }
        },
        data() {
            return {
                settings: {
                    itemsToShow: 1,
                    background:"#ababab"
                },
                value: 0,
                currentSlideIndex: 0
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
        background-color: var(--vc-clr-white);
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
