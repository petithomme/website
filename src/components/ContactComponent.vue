<template>
    <div id="container">
        <div>
            <img :src="require(`@/assets/contact.jpg`)" id="contact"/>
        </div>
        <div id="contactContainer">
            <div class="l"><img :src="require(`@/assets/mail.png`)" id="mail"/> <a href="mailto:libert.william@gmail.com"> libert.william@gmail.com </a></div>
            <div class="l"><img :src="require(`@/assets/linkedin.png`)" id="in"/> <a href="https://www.linkedin.com/in/william-libert/"> https://www.linkedin.com/in/william-libert/</a> </div>
            <div class="l"><img :src="require(`@/assets/profile.png`)" id="profile"/> <a href="http://william-libert.com/public/cv-2024.pdf"> Resume </a> </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactComponent"
    }
</script>

<style scoped>

    #contact {
        width: 35%;
    }

    .l {
        margin-top: 1rem;
    }

    #mail, #in, #profile {
        width: 10%;
        margin-right: 1rem;
    }

    #container, #contactContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }

    #contactContainer {
        flex-direction: column;
    }
</style>
