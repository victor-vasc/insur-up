<template>
<div id="app">
  <button v-for="tab in tabs" v-bind:key="tab.name" v-bind:class="['tab-button', { active: currentTab.name === tab.name }]" v-on:click="currentTab = tab">
    {{ tab.name }}
  </button>

  <component v-bind:is="currentTab.component" class="tab"></component>

</div>
</template>

<script>
var tabs = [{
    name: "Home",
    component: {
      template: "<div>Home component</div>"
    }
  },
  {
    name: "Posts",
    component: {
      template: "<div>Posts component</div>"
    }
  },
  {
    name: "Archive",
    component: {
      template: "<div>Archive component</div>"
    }
  }
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

<style>
</style>
