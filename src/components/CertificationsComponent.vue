<template>
    <DegreesComponent/>
</template>

<script>
    import DegreesComponent from "@/components/subComponents/DegreesComponent";
    export default {
        name: "CertificationsComponent",
        components: {DegreesComponent},
        data() {
            return {
                list: [
                    {
                        image: '',
                        name: 'The complete NestJS developer. Enterprise Node.js framework',
                        url: 'https://www.udemy.com/course/the-complete-nestjs-developer-enterprise-nodejs-framework',
                        certificat: ''
                    }
                ]
            }

        }
    }
</script>

<style scoped>

</style>
