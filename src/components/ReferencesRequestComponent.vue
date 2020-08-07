<template>
<b-container class="references-content">
  <div class="research-result">
    <ul class="text-left list-object pl-2" v-for="item in items" :key="item.id">
      <li class="w-100">
        <b-row align-v="center">
          <b-col cols="12">
            <b-row class="d-flex">
              <b-col cols="auto" sm="9">
                <b-row>
                  <b-col cols="11">
                    <h5 class="mb-0"><b-link v-bind:href="item.patch" target="_blank" class="reference_link"><b>{{ item.titulo }}</b></b-link></h5>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="6" class="my-2">
                    <h6 class="d-inline mb-1">Fonte:<b class="ml-2 mr-2"><b-link v-bind:href="item.patch" target="_blank" class="reference_link">{{item.fonte}}</b-link></b><br class="d-block d-sm-none"></h6>
                      <h6 class="d-inline">{{ item.periodo}}</h6>
                  </b-col>
                  <b-col cols="6" class="rating align-self-center d-block d-sm-none">
                    <RatingComponent class=" float-left" />
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="3" class="rating align-self-center pr-4 d-none d-sm-block">
                <RatingComponent class=" float-right" />
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="auto" class="mt-1 references-content-object w-50"><b-link v-bind:href="item.patch" target="_blank" class="references_content_link">{{ item.conteudo }}</b-link></b-col>
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
          id: "1",
          titulo: 'La bolsa de Madrid cayó un 3,48% al cierre, hasta los 8.021 puntos',
          patch:"https://www.elcomercio.com/actualidad/negocios/bolsa-de-madrid-cayo-48.html",
          periodo: '26/07/2020 • 11:27',
          fonte: 'EL COMERCIO ',
          conteudo: "También sufrieron otros grandes grupos como la constructora Sacyr, que cedió un 6,97% a 4,27 euros, el fabricante de acero inoxidable Acerinox, que perdió un 2,57% a 9,06 euros o el grupo constructor ACS, que cayó un 5,14% a 22,98 euros."
        },
        {
          id: "2",
          titulo: 'Cimic, del grupo ACS, ultima la venta de un 50% del gigante Thiess',
          patch: "https://www.alimarket.es/construccion/noticia/318873/cimic--del-grupo-acs--ultima-la-venta-de-un-50--del-gigante-thiess",
          periodo: '22/07/2020 • 13:39',
          fonte: 'EL COMERCIO ',
          conteudo: 'El grupo constructor ACS, a través de su filial australiana Cimic, ha firmado un acuerdo de exclusividad con fondos asesorados por la británica Elliott Advisors, para la posible inversión del 50% del capital de Thiess, la compañía más grande del mundo en servicios de minería, que permitiría el control conjunto de la misma por parte de Cimic y Elliott, quienes se encuentran en...'
        },
        {
          id: "3",
          titulo: 'La filial australiana de ACS ultima la venta de un 50% de la minera Thiess al fondo Elliot',
          periodo: '15/07/2020 • 21:22',
          fonte: 'EL TELEGRAFO ',
          conteudo: "El grupo ACS ha abierto su compañía minera Thiess a un socio financiero con el fin de compartir esfuerzos y riesgos. La firma australiana, de la que está en venta un 50% del capital, cuelga de la filial australiana Cimic. Tanto ACS como esta última han comunicado a los reguladores bursátiles de..."
        },
        {
          id: "4",
          titulo: 'Aportes de campaña y deudas. Las claves del vínculo de Vicentin con el macri...',
          periodo: '19/07/2020 • 09:39',
          fonte: 'EL UNIVERSO ',
          conteudo: 'Corría noviembre de 2010, pocos días antes de su casamiento con Juliana Awada, cuando Mauricio Macri llegó aeropuerto de Reconquista, en Santa Fe. En la piel de jefe de gobierno...'
        },
        {
          id: "5",
          titulo: 'ACS. Dura advertencia de los empresarios al Gobierno por la intervención',
          periodo: '21/07/2020 • 21:58',
          fonte: 'EL UNIVERSO ',
          conteudo: "La Asociación Empresaria Argentina (AEA), la Unión Industria Argentina (UIA) y la AsociaciónCristiana de Dirigentes de Empresa (ACDE) advirtieron esta noche sobre..."
        },
        {
          id: "6",
          titulo: 'La bolsa de Madrid cayó un 3,48% al cierre, hasta los 8.021 puntos',
          periodo: '29/07/2020 • 13:21',
          fonte: 'EL COMERCIO ',
          conteudo: "También sufrieron otros grandes grupos como la constructora Sacyr, que cedió un 6,97% a 4,27 euros, el fabricante de acero inoxidable Acerinox, que perdió un 2,57% a 9,06 euros o el grupo constructor ACS, que cayó un 5,14% a 22,98 euros."
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
.reference_link{
color: #40bdbf;
}

.references_content_link{
color: white!important;
text-decoration: none;
}

@media (max-width: 575.98px) {
  .references-content-object {
    max-width: 90%;
    width: 100% !important;
  }
}
</style>
