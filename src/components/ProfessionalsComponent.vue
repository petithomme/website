<template>
    <div class="presentation">
        <div class="subMenuContainer">
            <b-button v-for="i in [0,1,2,3,4]" v-bind:key="i"
                      class="submenu"
                      :variant="getVariant(i)"
                      @click="clickOn(i)">
                {{ companies[i]}}
            </b-button>
        </div>

        <br>
        <div class="displayWorks">
            <WorksComponent
                    :path="companies[tab]"
                    :description="descriptions[companies[tab]]"
                    :sub-description="subDescriptions[companies[tab]]"
                    :images="images[companies[tab]]"
                    :front-end="frontends[companies[tab]]"
                    :backend="backends[companies[tab]]"
                    :cicd="cicds[companies[tab]]"
                    :tools="tools[companies[tab]]"
                    :title="titles[companies[tab]]"
                    :link="links[companies[tab]]"/>
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
                this.tab = value
            },
            getVariant(i) {
                 return i !== this.tab ? "outline-primary": "danger"
            }
        },
        data() {
            return {
                images: {
                    Lotsys: 3,
                    Kobojo: 8,
                    Everreal: 4,
                    Megazebra: 1
                },
                companies: ['Lotsys','Kobojo','Megazebra', 'Everreal', 'Timify'],
                descriptions: {
                    Lotsys: 'Lotsys was the innovation, technology and services hub of the Group FDJ. Its mission was to provide responsive and high-performing services.',
                    Kobojo: 'Kobojo was a French video game developer and distribution company based in Paris. It was acquired by Celsius online in 2017.',
                    Megazebra: 'MegaZebra is a game development company located in Munich that develops free-to-play games for social networks like Facebook and mobile devices, such as smartphones and tablets.',
                    Everreal: 'EverReal is a digital real estate rental and sales software. It simplifies the processes from marketing and selecting interested parties to handover, for better, more successful work.',
                    Timify: 'Timify is a global leader in scheduling and resource management software-as-a-service (Saas). It is known for its sophisticated, secure, and customisable enterprise-focused technology.'
                },
                subDescriptions: {
                    Kobojo: ["Mutants genetic gladiators","Mutants genetic gladiators","Mutants genetic gladiators","Mutants genetic gladiators","Mutants genetic gladiators", "Atlantis fantasy", "Pyramid valley", "Pyramid valley"],
                    Megazebra: ["Mahjong trails"]
                },
                links: {
                    Lotsys: "https://www.fdj.fr/",
                    Kobojo: "http://www.kobojo.com/",
                    Megazebra: "https://www.megazebra.com/",
                    Everreal:"https://de.everreal.co/",
                    Timify: "https://www.timify.com/"
                },
                titles: {
                    Lotsys: "Developer",
                    Kobojo: "Lead / Senior developer",
                    Megazebra: "Lead / Senior developer",
                    Everreal:"Senior fullstack developer",
                    Timify: "Senior backend developer"
                },
                backends: {
                    Kobojo: "C# - Redis - MongoDB",
                    Megazebra: "PHP - NodeJS - Cassandra - MySQL",
                    Everreal: "NodeJS/Express/Typescript - Jest - PostgreSQL",
                    Timify: "NodeJs/Express – Ava - GraphQL - MongoDB"
                },
                frontends: {
                    Kobojo: "Actionscript",
                    Lotsys: "Actionscript - Java",
                    Megazebra: "Actionscript - Typescript",
                    Everreal: "React/Typescript – Redux - Jest - Mui"
                },
                tools: {
                    Megazebra: "Ruby - AIR - Haxe/OpenFL - VueJS"
                },
                cicds: {
                    Megazebra: "Jenkins",
                },
                tab: 3
            }
        }
    }
</script>

<style scoped>

    .displayWorks {
        margin-top: 1rem;
    }
</style>
