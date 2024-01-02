<template>
    <div class="subMenuContainer">
        <div class="submenu" @click="clickOn(0)">FDJ</div>
        <div class="submenu" @click="clickOn(1)">Kobojo</div>
        <div class="submenu" @click="clickOn(2)">Megazebra</div>
        <div class="submenu" @click="clickOn(3)">Everreal</div>
        <div class="submenu" @click="clickOn(4)">Timify</div>
    </div>

</template>

<script>
    export default {
        name: "ProfessionalsComponent",
        methods: {
             clickOn(value) {
                this.tab = value
            }
        },

        data() {
            return {
                tab: 0
            }
        }
    }
</script>

<style scoped>

</style>
