<template>
    <div v-for="i in 5" v-bind:key="i">
        <img :src="require(`@/assets/everreal/${i}.png`)" alt=""/>
    </div>

</template>

<script>
    export default {
        name: "WorksComponent",
        props: [
           "images", "path"
        ],
        data() {
            return {
                loops: this.images
            }
        }
    }
</script>

<style scoped>

</style>
