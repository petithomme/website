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
</style>
