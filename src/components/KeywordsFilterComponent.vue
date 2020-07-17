<template>
<div role="tablist">
  <b-card no-body class="mb-1 keywords-filter-container">
    <b-card-header header-tag="header" class="p-0" role="tab">
      <b-button block v-b-toggle.accordion-1 class="keywords-filter-container-buttom pl-3 d-flex justify-content-between pr-2">Filtrar por palavras-chave<b-icon-caret-down-fill class="carret-icon mr-2"></b-icon-caret-down-fill>
      </b-button>
    </b-card-header>
    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
      <b-card-body class="p-0">
          <b-form-tags v-model="value" no-outer-focus class=" pt-3 container-tags" size="sm">
            <template v-slot="{ tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag }">
              <b-input-group class="mb-2" size="sm">
                <b-form-input v-bind="inputAttrs" v-on="inputHandlers" placeholder="Termos essenciais..." class="form-control"></b-form-input>
                <b-input-group-append>
                  <b-button @click="addTag()" variant="info" class="btn-add-tags">
                    <b-icon-plus></b-icon-plus>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
              <div class="d-inline-block" style="font-size: 1.5rem;">
                <b-form-tag
                v-for="tag in tags"
                @remove="removeTag(tag)"
                :key="tag"
                :title="tag"
                variant="info"
                pill
                style="font-size:12px;"
                class="mr-1 px-2">{{ tag }}</b-form-tag>
              </div>
            </template>
          </b-form-tags>
      </b-card-body>
      <hr class="my-1 mx-3">
      <b-card-body class="p-0">
          <b-form-tags v-model="value2" no-outer-focus class=" pt-3 container-tags" size="sm">
            <template v-slot="{ tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag }">
              <b-input-group class="mb-2" size="sm">
                <b-form-input v-bind="inputAttrs" v-on="inputHandlers" placeholder="Termos excluídos..." class="form-control"></b-form-input>
                <b-input-group-append>
                  <b-button @click="addTag()" variant="info" class="btn-add-tags">
                    <b-icon-plus></b-icon-plus>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
              <div class="d-inline-block" style="font-size: 1.5rem;">
                <b-form-tag
                v-for="tag in tags"
                @remove="removeTag(tag)"
                :key="tag"
                :title="tag"
                variant="info"
                pill
                style="font-size:12px;"
                class="mr-1 px-2">{{ tag }}</b-form-tag>
              </div>
            </template>
          </b-form-tags>
      </b-card-body>
    </b-collapse>
  </b-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      value: ['apple', 'orange', 'banana'],
      value2: ['pera', 'uva', 'abacaxi']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.keywords-filter-container {
  background-color: inherit;
  border: none;
  border-radius: 0;
  font-family: Helvetica;
  font-weight: 300;
}

.keywords-filter-container-buttom,
.keywords-filter-container-buttom:hover,
.keywords-filter-container-buttom:active {
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

.btn-add-tags {
  border-bottom-right-radius: 15px !important;
  border-top-right-radius: 15px !important;
}

.form-control input {
  border-bottom-left-radius: 15px !important;
  border-top-left-radius: 15px !important;
}

.container-tags {
  background-color: rgba(0, 0, 0, .1);
  border: none;
}
</style>
