<template>
    <div class="presentation">
        <div class="subMenuContainer">
            <VaButton v-for="i in [0,1,2,3,4]" v-bind:key="i"
                      class="submenu"
                      preset="secondary"
                      :border-color="getColor(i)"
                      @click="clickOn(i)">
                {{ companies[i]}}
            </VaButton>
        </div>

        <div class="displayWorks" v-if="tab === 0">
            svsdvssfsfds
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfessionalsComponent",
        methods: {
             clickOn(value) {
                console.log(value)
                this.tab = value
            },
            getColor(value) {
                return this.tab === value ? "danger" : "info"
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

    .displayWorks {
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
    }
</style>
