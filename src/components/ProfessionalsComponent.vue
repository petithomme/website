<template>
    <div class="subMenuContainer">
        <VaButton v-for="i in [0,1,2,3,4]" v-bind:key="i"
                  class="submenu"
                  preset="secondary"
                  border-color="primary"
                  @click="clickOn(i)">
            {{ companies[i]}}
        </VaButton>
    </div>

</template>

<script>
    export default {
        name: "ProfessionalsComponent",
        methods: {
             clickOn(value) {
                 console.log(value)
                this.tab = value
            }
        },

        data() {
            return {
                companies: ['FDJ','Kobojo','Megazebra', 'Everreal', 'Timify'],
                tab: 0
            }
        }
    }
</script>

<style scoped>

</style>
