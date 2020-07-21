<template>
<b-col class="pb-3 filter-component px-0">
  <div class="justify-content-between d-flex pt-3 mx-3" style="color:white; font-size:24px">
    <p class="mb-0">Filtros</p>
    <p class="mb-0 bullet-menu"><b-icon-three-dots></b-icon-three-dots></p>
  </div>
  <hr class="">
  <div v-bar> <!-- el1 -->
  <div class="filter-component-section"> <!-- el2 -->
    <!-- your scrollable content -->
    <RegionFilterComponent/>
      <hr class="my-3">
    <TimeFilterComponent/>
      <hr class="my-3">
    <KeywordsFilterComponent/>
  </div>
  <!-- dragger will be automatically added here -->
</div>
</b-col>
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
.filter-component {
background-color: #292a2d;
border-radius: 10px;
font-family: Helvetica;
}
.teste{
color:white;
}
.filter-component-section{
overflow:auto;
max-height: 453px;
}
.bullet-menu{
position:absolute;
right:20px;
top:10px;
}
</style>
