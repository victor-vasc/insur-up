<template>
<b-container fluid="md" class="">
  <hr class="my-1">
  <b-row>
    <b-col class="mt-2 pb-2 references-field text-left">
      <div class="d-flex justify-content-between pt-1 pl-2">
        <h5 class="mb-0 mt-2 pl-2 references-title">Resultados de busca: <h6 class="d-inline-flex mb-0">6 resultados</h6>
        </h5>
        <p class="bullet-menu">
          <b-icon-three-dots></b-icon-three-dots>
        </p>
      </div>
      <h6 class="d-flex justify-content-start pl-3 mt-2 references-ordernation">ordernar por:<a href="#"><b>mais recentes > últimos dias</b></a></h6>
      <hr class="my-2">
      <div div v-bar="{
    preventParentScroll: true,
    scrollThrottle: 30,
    }">
          <!-- el2 -->
          <!-- your scrollable content -->
          <ReferencesRequestComponent />
        <!-- dragger will be automatically added here -->
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import ReferencesRequestComponent from './ReferencesRequestComponent.vue'
export default {
  components: {
    ReferencesRequestComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.references-field {
  background-color: #292a2d80;
  border-radius: 10px;
}

.references-content {
  max-height: 70vh;
}

.references-title,
.references-ordernation {
  color: white;
}

.references-title {}

.references-ordernation {
  font-size: 14px;
}

.references-ordernation b {
  color: #40bdbf;
  padding-left: 0.5rem;
}

.references-ordernation a:hover {
  text-decoration: none;
}

.bullet-menu {
  position: absolute;
  right: 20px;
  top: 10px;
}

@media (max-width: 575.98px) {
  .references-field {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
