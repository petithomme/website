<template>
    <div class="presentation">
        <div class="subMenuContainer">
            <b-button v-for="i in [0,1,2,3,4]" v-bind:key="i"
                      class="submenu"
                      variant="outline-primary"
                      @click="clickOn(i)">
                {{ companies[i]}}
            </b-button>
        </div>

        <br>
        <div class="displayWorks" v-if="tab === 3">
            <WorksComponent :path="companies[tab]" />
        </div>
    </div>
</template>

<script>
    import WorksComponent from "@/components/subComponents/WorksComponent";
    export default {
        name: "ProfessionalsComponent",
        components: {WorksComponent},
        methods: {
             clickOn(value) {
                console.log(value)
                this.tab = value
            },

        },
        data() {
            return {
                companies: ['FDJ','Kobojo','Megazebra', 'Everreal', 'Timify'],
                tab: 4
            }
        }
    }
</script>

<style scoped>

    .displayWorks {
        margin-top: 1rem;
    }
</style>
