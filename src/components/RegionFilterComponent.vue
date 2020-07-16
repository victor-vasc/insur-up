<template>
  <div role="tablist component my-3">
    <b-card no-body class="mb-1 region-filter-container">
      <b-card-header header-tag="header" class="p-0" role="tab">
        <b-button block v-b-toggle.accordion-2 class="region-filter-container-button pl-3 d-flex justify-content-between pr-2">Filtrar por regiões<b-icon-caret-down-fill class="carret-icon mr-2"></b-icon-caret-down-fill></b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion-2" role="tabpanel">
        <b-card-body class="">
          <div class="component teste">
            <div class="">
              <treeselect v-model="value"
              :multiple="true"
              :options="options"
              placeholder="Fontes de notícisas escolhidas..."
              :always-open="true"
              :autoFocus="true"
              :appendToBody="false"
              :showCount="true"
              :maxHeight="150"
              />
            </div>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
// import the component
 import Treeselect from '@riophae/vue-treeselect'
 // import the styles
 import '@riophae/vue-treeselect/dist/vue-treeselect.css'

 export default {
     // register the component
     components: { Treeselect },
     data() {
       return {
         // define the default value
         value: null,
         // define options
         options: [ {
           id: 'Argentina',
           label: 'Argentina',
           children: [ {
             id: 'Clárin',
             label: 'Clárin',
             // isNew: true,
           }, {
             id: 'La Nacíon',
             label: 'La Nacíon',
           },
           {
             id: 'Diario Popular',
             label: 'Diario Popular',
           } ],
           // isNew: true,
         }, {
           id: 'Bolivia',
           label: 'Bolivia',
           children: [ {
             id: 'El Deber',
             label: 'El Deber',
             // isNew: true,
           }, {
             id: 'La Razón',
             label: 'La Razón',
           },
           {
             id: 'El Mundo',
             label: 'El Mundo',
           } ],
         }, {
           id: 'Chile',
           label: 'Chile',
           children: [ {
             id: 'El Mercúrio',
             label: 'El Mercúrio',
             // isNew: true,
           }, {
             id: 'La Tercena',
             label: 'La Tercena',
           },
           {
             id: 'La Nacion',
             label: 'La Nacion',
           } ],
         }, {
           id: 'Colômbia',
           label: 'Colômbia',
           children: [ {
             id: 'El Tiempo',
             label: 'El Tiempo',
             // isNew: true,
           }, {
             id: 'El Espectador',
             label: 'El Espectador',
           },
           {
             id: 'El Nuevo Siglo',
             label: 'El Nuevo Siglo',
           },{
             id: 'El Colombiano',
             label: 'El Colombiano',
           } ],
         }, {
           id: 'Equador',
           label: 'Equador',
           children: [ {
             id: 'El Universo',
             label: 'El Universo',
             // isNew: true,
           }, {
             id: 'El Comercio-Equador',
             label: 'El Comercio',
           },
           {
             id: 'El Telégrafo',
             label: 'El Telégrafo',
           } ],
         }, {
           id: 'Peru',
           label: 'Peru',
           children: [ {
             id: 'El Comercio-Peru',
             label: 'El Comercio',
             // isNew: true,
           }, {
             id: 'Correo',
             label: 'Correo',
           },
           {
             id: 'Peru 21',
             label: 'Peru 21',
           }, {
             id: 'La República',
             label: 'La República',
           }, ],
         }, ],
       }
     },
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.region-filter-container{
background-color: inherit;
border:none;
border-radius:0;
font-family: Helvetica;
}

.region-filter-container-button, .region-filter-container-button:active, .region-filter-container-button:focus{
border:none;
background-color: #636568!important;
box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2)!important;
border-radius:2px;
text-align: left;
font-size: 14px;
padding: 3px 5px;
}
.carret-icon{
transform:scale(0.8);
}
</style>
