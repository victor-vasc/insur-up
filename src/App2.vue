<template>
<div id="app">
  <Navbar/>
  <Sidebar/>
  <b-container class="">
    <b-row>
      <b-col col-sm="12">
        <b-row>
          <SearchField />
        </b-row>
        <!-- <b-row class="d-md-none d-block">
          <FilterField/>
        </b-row> -->
        <b-row class="d-none d-md-block">
          <ReferencesField />
        </b-row>
      </b-col>
      <b-col cols="4" class="d-none d-lg-block">
        <FilterField/>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import SearchField from './components/SearchField.vue'
import FilterField from './components/FilterField.vue'
import ReferencesField from './components/ReferencesField.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    SearchField,
    FilterField,
    ReferencesField
  }
}
</script>

<style>
.vb>.vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
}

.vb>.vb-dragger>.vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0, 0, 0, 0);
  transform: rotate3d(0, 0, 0, 0);
  -webkit-transition:
    background-color 100ms ease-out,
    margin 100ms ease-out,
    height 100ms ease-out;
  transition:
    background-color 100ms ease-out,
    margin 100ms ease-out,
    height 100ms ease-out;
  background-color: rgba(184, 184, 184, .1);
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  height: calc(100% - 20px);
  display: block;
}

.vb.vb-scrolling-phantom>.vb-dragger>.vb-dragger-styler {
  background-color: rgba(184, 184, 184, .3);
}

.vb>.vb-dragger:hover>.vb-dragger-styler {
  background-color: rgba(184, 184, 184, 1);
}

.vb.vb-dragging>.vb-dragger>.vb-dragger-styler {
  background-color: rgba(184, 184, 184, 1);
}

.vb.vb-dragging-phantom>.vb-dragger>.vb-dragger-styler {
  background-color: rgba(184, 184, 184, 1);
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, Poppins sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #0e0e0f;
  /* margin-top: 60px; */
}
.vue-treeselect__menu-container,
.vue-treeselect__menu {
  position: relative !important;
}
.left-content{
max-height:467px
}
.sidebar-filter-body, .sidebar-filter-header{
background-color: #0e0e0f;
}
</style>
