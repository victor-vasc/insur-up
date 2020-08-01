<template>
<b-container class="references-content">
  <div class="research-result">
    <ul class="text-left list-object pl-2" v-for="item in items" :key="item">
      <li class="w-100">
        <b-row align-v="center">
          <b-col cols="12" class="references">
            <b-row class="d-flex">
              <b-col cols="11">
                <h5 class="mb-0 mr-4 w-100"><b>{{ item.titulo }}</b></h5>
              </b-col>
              <b-col cols="7" class="pr-0">
                <h6 class="my-2">
                  <spam class="d-inline-flex mb-1">Fonte:<b class="ml-2 mr-2">{{item.fonte}}</b></spam><br class="d-block d-sm-none">
                  <spam>{{ item.periodo}}</spam>
                </h6>
              </b-col>
              <b-col cols="5" class="rating align-self-center d-flex justify-content-lg-end justify-content-sm-start pr-4">
                <RatingComponent />
              </b-col>
              <b-col cols="auto" class="mt-1 references-content-object w-50">{{ item.conteudo }}</b-col>
            </b-row>
          </b-col>
        </b-row>
        <hr class="mt-2 mb-0">
      </li>
    </ul>
  </div>
</b-container>
</template>

<script>
import RatingComponent from './RatingComponent.vue';
export default {
  name: 'RequestComponent',
  components: {
    RatingComponent
  },
  data() {
    return {
      items: [{
          titulo: 'Vicentin. Dura advertencia de los empresarios al Gobierno por la intervención',
          periodo: '9/06/2020 • 21:58',
          fonte: 'LA NACION ',
          conteudo: "La Asociación Empresaria Argentina (AEA), la Unión Industria Argentina (UIA) y la AsociaciónCristiana de Dirigentes de Empresa (ACDE) advirtieron esta noche sobre..."
        },
        {
          titulo: 'Aportes de campaña y deudas. Las claves del vínculo de Vicentin con el macri...',
          periodo: '10/06/2020 • 09:39',
          fonte: 'CLARÍN ',
          conteudo: 'Corría noviembre de 2010, pocos días antes de su casamiento con Juliana Awada, cuando Mauricio Macri llegó aeropuerto de Reconquista, en Santa Fe. En la piel de jefe de...'
        },
        {
          titulo: 'Vicentin. Dura advertencia de los empresarios al Gobierno por la intervención',
          periodo: '9/06/2020 • 21:58',
          fonte: 'LA NACION ',
          conteudo: "La Asociación Empresaria Argentina (AEA), la Unión Industria Argentina (UIA) y la AsociaciónCristiana de Dirigentes de Empresa (ACDE) advirtieron esta noche sobre..."
        },
        {
          titulo: 'Aportes de campaña y deudas. Las claves del vínculo de Vicentin con el macri...',
          periodo: '10/06/2020 • 09:39',
          fonte: 'CLARÍN ',
          conteudo: 'Corría noviembre de 2010, pocos días antes de su casamiento con Juliana Awada, cuando Mauricio Macri llegó aeropuerto de Reconquista, en Santa Fe. En la piel de jefe de gobierno...'
        },
        {
          titulo: 'Vicentin. Dura advertencia de los empresarios al Gobierno por la intervención',
          periodo: '9/06/2020 • 21:58',
          fonte: 'LA NACION ',
          conteudo: "La Asociación Empresaria Argentina (AEA), la Unión Industria Argentina (UIA) y la AsociaciónCristiana de Dirigentes de Empresa (ACDE) advirtieron esta noche sobre..."
        },
        {
          titulo: 'Aportes de campaña y deudas. Las claves del vínculo de Vicentin con el macri...',
          periodo: '10/06/2020 • 09:39',
          fonte: 'CLARÍN ',
          conteudo: 'Corría noviembre de 2010, pocos días antes de su casamiento con Juliana Awada, cuando Mauricio Macri llegó aeropuerto de Reconquista, en Santa Fe. En la piel de jefe de gobierno...'
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-object {
  list-style: none;
  color: white;
  font-size: 12px;
}

.list-object li h5 {
  color: #40bdbf;
  font-size: 16px;
}

.list-object li div h6,
.list-object li div h6 b {
  font-size: 14px;
}

.list-object li div h6 b {
  color: #40bdbf;
}

@media (max-width: 575.98px) {
  .references-content-object {
    max-width: 90%;
    width: 100% !important;
  }

  .references div h5 {
    width: 100% !important;
  }
}
</style>
