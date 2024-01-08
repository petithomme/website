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
            <WorksComponent :path="companies[tab]" :description="descriptions[companies[tab]]" :images="images[companies[tab]]"/>
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
                images: {
                    Everreal: 4
                },
                companies: ['FDJ','Kobojo','Megazebra', 'Everreal', 'Timify'],
                descriptions: {

                    Everreal: 'EverReal is a digital real estate rental and sales software. It simplifies the processes from marketing and selecting interested parties to handover, for better, more successful work.',
                    Timify: 'Scheduling solutions for teams and enterprises\n Convenient and instant appointment booking for your customers. Powerful and efficient scheduling for your entire business.'
                },
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
