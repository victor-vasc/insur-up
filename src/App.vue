<template>
<div id="app">
  <div class="custom-navbar">
    <b-nav tabs active class="ml-5 pl-5">
      <b-nav-item v-for="tab in tabs" v-bind:key="tab.name" v-bind:class="['tab-button', { active: currentTab.name === tab.name }]" v-on:click="currentTab = tab" class="mt-4 mb-2 mr-2 subtitle" variant="dark">
        {{ tab.name }}
      </b-nav-item>
    </b-nav>
  </div>
  <keep-alive>
    <component v-bind:is="currentTab.component" class="tab"></component>
  </keep-alive>
</div>
</template>

<script>
import Dashboard from './Dashboard.vue'
var tabs = [{
    name: "Dashboard",
    component: Dashboard,
  },
  {
    name: "Resultado da busca",
    component: {
      template: "<div>Posts component</div>"
    }
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
      currentTab: tabs[0]
    }
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
color: rgba(255, 255, 255, 0.5)!important
}


.custom-navbar .nav-tabs a {
  color: white
}
</style>
