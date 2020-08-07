<template>
<div role="tablist" class="component my-2">
  <b-card no-body class="mb-1 time-filter-container">
    <b-card-header header-tag="header" class="p-0" role="tab">
      <b-button block v-b-toggle.accordion-3 class="time-filter-container-buttom pl-3 d-flex justify-content-between pr-2">Filtrar por período de tempo<b-icon-caret-down-fill class="carret-icon mr-2"></b-icon-caret-down-fill>
      </b-button>
    </b-card-header>
    <b-collapse id="accordion-3" accordion="my-accordion-3" role="tabpanel">
      <b-card-body class="px-0 py-0">
        <div class="component teste">
          <treeselect v-model="value" :multiple="false" :options="options" placeholder="Período de tempo escolhido..." :always-open="true" :autoFocus="true" :appendToBody="false" :showCount="true" :maxHeight="150" />
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
import '../assets/css/vue-treeselec-custom.css'
export default {
  // register the component
  components: {
    Treeselect
  },
  data() {
    return {
      // define the default value
      value: null,
      // define options
      options: [{
          id: 'op1 ',
          label: 'Nas últimas 24 horas',
          isNew: true,
          isDisabled: true,
        }, {
          id: 'op2',
          label: 'Nos últimos dias',
        }, {
          id: 'op3',
          label: 'Na última semana',
          isDisabled: true,
        },
        {
          id: 'op4',
          label: 'Na última semana',
          isDisabled: true,
        },
        {
          id: 'op5',
          label: 'Nas últimas semanas',
          isDisabled: true,
        },
        {
          id: 'op6',
          label: 'No último mês',
          isDisabled: true,
        },
        {
          id: 'op7',
          label: 'Nos últimos mêses',
          isDisabled: true,
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time-filter-container {
  background-color: inherit;
  border: none;
  border-radius: 0;
  font-family: Helvetica;
  font-weight: 300;
}

.card-header {
  border: none;
}

.time-filter-container-buttom,
.time-filter-container-buttom:hover,
.time-filter-container-buttom:active {
  border: none;
  background-color: #636568 !important;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2) !important;
  border-radius: 2px;
  text-align: left;
  font-size: 14px;
  padding: 3px 5px;
}

.carret-icon {
  transform: scale(0.8);
}
</style>
