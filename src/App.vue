<template>
  <div id="nav">
    <b-link id="menu" class="link"><router-link to="/">Home</router-link></b-link>
    <b-link class="link"><router-link to="/professionals">Professionals</router-link></b-link>
    <b-link class="link"><router-link to="/projects">Projects</router-link></b-link>
    <b-link class="link"><router-link to="/certifications">Certifications</router-link></b-link>
    <b-link class="link"><router-link to="/contact">Contact</router-link></b-link>
  </div>
  <div id="separator"></div>
  <div id="router">
    <router-view />
  </div>

</template>

<script>

  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap";
  @import "https://fonts.googleapis.com/icon?family=Material+Icons";

  .link {
    margin-right: 1rem;
  }

  .active {
    margin-right: 10rem;
  }

  #nav {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    font-family: "Roboto";
    font-weight: 800;
    color: teal;
  }

  #router {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    font-family: "Roboto";
    font-weight: 800;
    color: slategrey;
  }

  #menu {
    margin-left: auto;
  }

  #separator {
    margin-top: 0.75rem;
    background: linear-gradient(#dddddd, #ffffff);
    height: 0.5rem;
  }

  #router {
    margin-top: 0.5rem;
  }

  .subMenuContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    cursor:pointer;
  }

  .submenu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    border: thin solid slategrey;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
</style>
