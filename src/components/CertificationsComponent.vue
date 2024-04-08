<template>
    <DegreesComponent :udemy="udemy" :udacity="udacity" :professionals="professionals"
                      :eduonix="eduonix" :edx="edx" :coursera="coursera" :blockchain="blockChain"/>
</template>

<script>
    import DegreesComponent from "@/components/subComponents/DegreesComponent";
    const certifs = require('@/assets/certifications/certifications.json')
    export default {
        name: "CertificationsComponent",
        components: {DegreesComponent},
        data() {
            return certifs.certifications

        }
    }
</script>

<style scoped>

</style>
