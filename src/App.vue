<template>
  <div id="nav">
    <span id="menu"><router-link to="/">Home</router-link></span>
    <span class="menu"><router-link to="/professionals">Professionals</router-link></span>
    <span class="menu"><router-link to="/projects">Projects</router-link></span>
    <span class="menu"><router-link to="/certifications">Certifications</router-link></span>
    <span class="menu"><router-link to="/contact">Contact</router-link></span>
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
    margin-right: 2rem;
  }

  .menu {
    margin-right: 2rem;
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
    width: 6rem;
    border: slategrey;
    border-style: solid;
    border-width: thin;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
</style>
