<template>

    <div>
        <p class="description"> {{ this.description }}
            <br>
            <a :href="this.link" v-if="this.link">{{ this.path }}</a>
        </p>
        <p class="description" v-if="subDescription">Game : {{ this.getSubdescription }} </p>

        <div v-if="video" class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RNF5IofZSKE?si=TYbSeLohOdQ5K8oF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <carousel v-bind="settings" @slide-start="handleSlideStart" v-if="images > 0">
            <slide v-for="i in this.images" :key="i">
               <img :src="require(`@/assets/${this.path.toLowerCase()}/${i}.png`)"
                    alt="" class="carousel__item"/>
            </slide>

            <template #addons="{ slidesCount }">
                <navigation v-if="slidesCount > 1"/>
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
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    export default {
        name: "WorksComponent",
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation
        },
        props: [
           "path", "description", "images", "subDescription", "link", "title", "backend", "frontEnd", "cicd", "tools", "video"
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

    .video {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

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
