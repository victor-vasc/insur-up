<template>
<div>
  <b-sidebar id="sidebar-1" title="Filtros" text-variant="light" body-class="sidebar-filter-body" header-class="sidebar-filter-header">
    <div class="pl-0 pr-2 py-2">
      <div v-bar> <!-- el1 -->
      <div class="filter-component-section py-4"> <!-- el2 -->
        <!-- your scrollable content -->
        <RegionFilterComponent/>
          <hr class="my-3">
        <TimeFilterComponent/>
          <hr class="my-3">
        <KeywordsFilterComponent/>
      </div>
      <!-- dragger will be automatically added here -->
    </div>
    </div>
  </b-sidebar>
</div>
</template>

<script>
import RegionFilterComponent from './RegionFilterComponent.vue'
import TimeFilterComponent from './TimeFilterComponent.vue'
import KeywordsFilterComponent from './KeywordsFilterComponent.vue'
export default {
  name: 'FilterField',
  components: {
KeywordsFilterComponent,
RegionFilterComponent,
TimeFilterComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-component-section {
background-color: #292a2d;
border-radius: 0px;
font-family: Helvetica;
}
.teste{
color:white;
}
.filter-component-section{
overflow:auto;
max-height: 485px;
}
.bullet-menu{
position:absolute;
right:20px;
top:10px;
}
</style>
