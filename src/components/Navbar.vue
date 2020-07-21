<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand class="mt-4 title">Dashboard</b-navbar-brand>
    <!-- <b-navbar-toggle target="nav-collapse"><b-button v-b-toggle.sidebar-1>Filtros</b-button></b-navbar-toggle> -->
  </b-navbar>
</template>

<script>
// import FilterField from './FilterField.vue'
export default {
  name: 'Navbar',
  components: {
    // FilterField,
  }
  // props: {
  //   type: fixed
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
font-size: 34px;
margin-left:5vw;
color: white;
}
</style>
