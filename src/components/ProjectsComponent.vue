<template>

    <div class="presentation">
        <div class="subMenuContainer">
            <b-button v-for="i in [0,1,2,3,4]" v-bind:key="i"
                      class="submenu"
                      variant="outline-primary"
                      @click="clickOn(i)">
                {{ projects[i]}}
            </b-button>
        </div>

        <br>


        <div class="displayWorks">
            <WorksComponent
                    :path="projects[tab]"
                    :description="descriptions[projects[tab]]"
                    :sub-description="subDescriptions[projects[tab]]"
                    :images="images[projects[tab]]"
                    :link="links[projects[tab]]"/>
        </div>

    </div>

</template>

<script>
    import WorksComponent from "@/components/subComponents/WorksComponent";

    export default {
        name: "ProjectsComponent",
        components: {WorksComponent},
        methods: {
            clickOn(value) {
                console.log(value)
                this.tab = value
            },
        },
        data() {
            return {
                projects: ['Exane','Stories','Q4W', 'Sambo', 'Misc'],
                images: {
                    Exane: 3,
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
                    Misc: "http://www.lille2004.com/",
                    Sambo: "https://puc.paris/sambo"
                },
                tab: 1,
            }
        }
    }
</script>

<style scoped>

</style>
