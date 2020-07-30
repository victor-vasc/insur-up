<template>
<div id="app">
  <b-container>
    <div class="custom-navbar d-flex justify-content-center justify-content-sm-start">
      <b-nav tabs class="align-bottom d-flex align-items-end">
        <b-nav-item v-for="tab in tabs" v-bind:key="tab.name" v-bind:class="['tab-button', { active: currentTab.name === tab.name }, {disabled: tabs[1]}]" v-on:click="currentTab = tab" class="mt-1 mb-2 mr-2 subtitle align-bottom " variant="dark">
          {{ tab.name }}
        </b-nav-item>
      </b-nav>
    </div>
    <keep-alive>
      <component v-bind:is="currentTab.component" class="tab"></component>
    </keep-alive>
  </b-container>
</div>
</template>

<script>
import Dashboard from './Dashboard.vue';
import ReferencesRequest from './components/ReferencesRequest.vue'
var tabs = [{
    name: "Dashboard",
    component: Dashboard,
  },
  {
    name: "Resultado da busca",
    component: ReferencesRequest,
  },
  // {
  //   name: "Archive",
  //   component: {
  //     template: "<div>Archive component</div>"
  //   }
  // }
];
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  data() {
    return {
      tabs: tabs,
      currentTab: tabs[0],
    }
  },
  mounted() {
    document.getElementsByClassName("subtitle")[1].firstChild.classList.add("disabled")
  }
}
</script>

<style scoped>
.custom-navbar .subtitle a .nav-tabs .nav-link:focus,
.custom-navbar .nav-tabs .nav-link:hover {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-bottom: 2px solid white;
  color: rgb(225, 255, 255);
}

.custom-navbar .nav-tabs {
  border-bottom: none;
}

.custom-navbar .nav-link {
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  font-size: 24px
}

.custom-navbar .nav-tabs .active a {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-bottom: 2px solid #54a4a5;
}

.custom-navbar .nav-tabs :not(.active) a {
  color: rgba(255, 255, 255, 0.5) !important;
  font-size: 18px;
}

.custom-navbar .nav-tabs a {
  color: white;
}

/* Small devices (mobile, 576px and up) */
@media (max-width: 575.98px) {
  .custom-navbar .nav-link {
    font-size: 18px;
  }
  .custom-navbar .nav-tabs :not(.active) a {
    font-size: 14px;
  }
}

</style>
