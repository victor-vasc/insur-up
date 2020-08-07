<template>
<div class="">
  <ul class="d-flex justify-content-start text-left list-object pl-2" v-for="item in items" :key="item.id">
    <li class="w-100">
      <b-row align-v="center">
        <b-col cols="9" class="references">
          <h5 class="mb-0"><b>{{ item.titulo }}</b></h5>
          <div class="d-flex">
            <h6 class="mr-3">{{ item.periodo}}</h6>
            <h6 class="ml-3">Fonte: <b>{{item.fonte }}</b></h6>
          </div>
          <div>{{ item.conteudo }}</div>
        </b-col>
        <b-col cols="3" class="pl-4 float-right">
          <RatingComponent />
        </b-col>
      </b-row>
      <hr class="mt-2 mb-0">
    </li>
  </ul>
</div>
</template>

<script>
import RatingComponent from './RatingComponent.vue';
export default {
  name: 'Test',
  components: {
    RatingComponent
  },
  data() {
    return {
      myToggle: false,
      items: [{
          id: "1",
          titulo: 'Dura advertencia de los empresarios al Gobierno por la intervención...',
          periodo: '9/06/2020 • 21:58',
          fonte: 'LA NACION ',
          conteudo: "La Asociación Empresaria Argentina (AEA), la Unión Industria Argentina (UIA) y la AsociaciónCristiana de Dirigentes de Empresa (ACDE) advirtieron esta noche sobre..."
        },
        {
          titulo: 'Aportes de campaña y deudas. Las claves del vínculo de Vicentin con el macri...',
          periodo: '10/06/2020 • 09:39',
          fonte: 'CLARÍN ',
          conteudo: '...Pocos días antes de su casamiento con Juliana Awada, cuando Mauricio Macri llegó aeropuerto de Reconquista, en Santa Fe. En la piel de jefe de...'
        },
        {
          titulo: 'Vicentin. Los empresarios al Gobierno por la intervención',
          periodo: '11/06/2020 • 16:23',
          fonte: 'LA NACION ',
          conteudo: "La Unión Industria Argentina (UIA) advirtieron esta noche sobre..."
        },
        {
          id: "2",
          titulo: 'Las claves del vínculo de Vicentin con el macri...',
          periodo: '13/06/2020 • 16:33',
          fonte: 'CLARÍN ',
          conteudo: 'Corría noviembre de 2010, cuando Mauricio Macri llegó aeropuerto de Reconquista, en Santa Fe. En la piel de jefe de gobierno...'
        },
        {
          id: "3",
          titulo: 'Vicentin. Dura advertencia de los empresarios al Gobierno por la intervención',
          periodo: '9/06/2020 • 21:58',
          fonte: 'LA NACION ',
          conteudo: "La Asociación Empresaria Argentina (AEA), la Unión Industria Argentina (UIA) y la AsociaciónCristiana de Dirigentes de Empresa (ACDE) advirtieron esta noche sobre..."
        },
        {
          id: "4",
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
</style>
