<template>
    <img :src="require(`@/assets/certifications/${image}`)" />
    <a :href="url">{{ name }}</a>
</template>

<script>
    export default {
        name: "CertificationComponent",
        props: ["image", "name", "url"]
    }
</script>

<style scoped>
    img{
        width: 3rem;
        margin-right: 1rem;
    }

</style>
