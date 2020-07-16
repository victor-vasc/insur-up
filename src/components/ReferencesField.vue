<template>
<b-col class="mt-2 pr-1 pb-2 references-field">
  <div class="d-flex justify-content-between pt-1">
    <h5 class="mb-0 mt-3 pl-2 references-title">Referencias salvas recentemente</h5>
    <p class="bullet-menu"><b-icon-three-dots></b-icon-three-dots></p>
  </div>
  <h6 class="d-flex justify-content-start pl-2 references-ordernation">ordernar por:<b>mais recentes</b></h6>
  <hr class="my-2">
  <div div v-bar="{
    preventParentScroll: true,
    scrollThrottle: 30,
}"> <!-- el1 -->
  <div class="references-content"> <!-- el2 -->
    <!-- your scrollable content -->
        <ReferencesComponent/>
  </div>
  <!-- dragger will be automatically added here -->
</div>
</b-col>
</template>

<script>
import ReferencesComponent from './ReferencesComponent.vue'
export default {
  components: {
    ReferencesComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.references-field {
  background-color: #292a2d;
  border-radius: 10px;
}
.references-content{
  max-height: 200px;
}
.references-title, .references-ordernation{
color:white;
}

.references-title{
}
.references-ordernation{
font-size:14px;
}
.references-ordernation b{
color:#40bdbf;
padding-left:0.5rem;
}
.bullet-menu{
position:absolute;
right:20px;
top:10px;
}
</style>
