<template>
    <div class="presentation">

        <h2> Blockchain </h2>
        <div v-for="(item, index) in blockchain" v-bind:key="index" class="certif">
            <img :src="require(`@/assets/certifications/${item.image}`)" />
            <a :href="item.url">{{ item.name }}</a>
        </div>

        <h2> Professionals </h2>
        <div v-for="(item, index) in professionals" v-bind:key="index" class="certif">
            <img :src="require(`@/assets/certifications/${item.image}`)" />
            <a :href="item.url">{{ item.name }}</a>
        </div>

        <h2> Udemy </h2>
        <div v-for="(item, index) in udemy" v-bind:key="index" class="certif">
            <img :src="require(`@/assets/certifications/${item.image}`)" />
            <a :href="item.url">{{ item.name }}</a>
        </div>

        <h2> Udacity </h2>
        <div v-for="(item, index) in udacity" v-bind:key="index" class="certif">
            <img :src="require(`@/assets/certifications/${item.image}`)" />
            <a :href="item.url">{{ item.name }}</a>
        </div>

        <h2> Eduonix </h2>
        <div v-for="(item, index) in eduonix" v-bind:key="index" class="certif">
            <img :src="require(`@/assets/certifications/${item.image}`)" />
            <a :href="item.url">{{ item.name }}</a>
        </div>

        <h2> Coursera </h2>
        <div v-for="(item, index) in coursera" v-bind:key="index" class="certif">
            <img :src="require(`@/assets/certifications/${item.image}`)" />
            <a :href="item.url">{{ item.name }}</a>
        </div>

        <h2> Edx </h2>
        <div v-for="(item, index) in edx" v-bind:key="index" class="certif">
            <img :src="require(`@/assets/certifications/${item.image}`)" />
            <a :href="item.url">{{ item.name }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DegreesComponent",
        props: ["udemy", "udacity", "professionals", "eduonix", "coursera", "edx", "blockchain"],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

    h2 {
        font-family: "Roboto";
        font-weight: 600;
        font-size: 1.5rem;
        margin-left: -5rem;
        text-decoration: underline;
    }

    .certif {
        height: 4rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
    }

    img{
        width: 3rem;
        margin-right: 1rem;
    }
</style>
