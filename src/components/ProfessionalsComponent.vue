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
        <div class="displayWorks">
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
                    Kobojo: 5,
                    Everreal: 4
                },
                companies: ['Lotsys','Kobojo','Megazebra', 'Everreal', 'Timify'],
                descriptions: {
                    Lotsys: 'Lotsys was the innovation, technology and services hub of the Group FDJ. Its mission was to provide responsive and high-performing services.',
                    Kobojo: 'Kobojo was a French video game developer and distribution company based in Paris. It was acquired by Celsius online in 2017',
                    Megazebra: 'MegaZebra is a game development company located in Munich that develops free-to-play games for social networks like Facebook and mobile devices, such as smartphones and tablets',
                    Everreal: 'EverReal is a digital real estate rental and sales software. It simplifies the processes from marketing and selecting interested parties to handover, for better, more successful work.',
                    Timify: 'TIMIFY is a global leader in scheduling and resource management software-as-a-service (Saas). It is known for its sophisticated, secure, and customisable enterprise-focused technology.'
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
