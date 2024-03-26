<template>

    <div class="presentation">
        <div class="subMenuContainer">
            <b-button v-for="i in [0,1,2,3,4]" v-bind:key="i"
                      class="submenu"
                      :variant="getVariant(i)"
                      @click="clickOn(i)">
                {{ projects[i]}}
            </b-button>
        </div>

        <br>

        <Transition>
            <div class="displayWorks" v-if="show">
                <WorksComponent
                        :path="projects[tab]"
                        :description="descriptions[projects[tab]]"
                        :sub-description="subDescriptions[projects[tab]]"
                        :images="images[projects[tab]]"
                        :link="links[projects[tab]]"
                        :video="videos[projects[tab]]"/>
            </div>
        </Transition>


    </div>

</template>

<script>
    import WorksComponent from "@/components/subComponents/WorksComponent";

    export default {
        name: "ProjectsComponent",
        components: {WorksComponent},
        methods: {
            clickOn(value) {
                this.tab = value
                this.show = false
                this.showTab()
            },
            getVariant(i) {
                return i !== this.tab ? "outline-primary": "danger"
            },
            showTab() {
                setTimeout(()=> this.show = true, 300)
            }
        },
        mounted() {
            this.showTab()
        },
        data() {
            return {
                show: false,
                projects: ['Exane','Stories','Q4W', 'Sambo', 'Misc'],
                videos: {
                    Exane: 'https://youtu.be/RNF5IofZSKE',
                },
                images: {
                    Exane: 0,
                    Stories: 5,
                    Q4W: 3,
                    Sambo: 1,
                    Misc: 6,
                },
                descriptions: {
                    Exane: 'It is a Match 3 game I did fully alone. In this game, you navigate through different maps with a pirate style design. Each layout can evolve, forced by game design, or the choice of the user.',
                    Stories: 'It is an application I have created with a friend who is an artist. You get every day a new story for your kids created by AI. ',
                    Q4W: 'A mod for Quake 4 to set back the quake world physics',
                    Sambo: 'A billboard created for the Sambo "Grand Prix de Paris" in 2013',
                    Misc: 'Some 3d created in school and a table set designed for "Lille 2004 European capital of culture"'
                },
                subDescriptions: {
                },
                links: {
                    Exane: "https://play.google.com/store/apps/details?id=ttm.skill.Exane",
                    Stories: "https://play.google.com/store/apps/details?id=com.sample.stories",
                    Sambo: "https://puc.paris/sambo"
                },
                tab: 0,
            }
        }
    }
</script>

<style scoped>

</style>
