<template>
<div role="tablist">
  <b-card no-body class="mb-1 keywords-filter-container">
    <b-card-header header-tag="header" class="p-0" role="tab">
      <b-button block v-b-toggle.accordion-1 class="keywords-filter-container-buttom pl-3 d-flex justify-content-between pr-2">Filtrar por palavras-chave<b-icon-caret-down-fill class="carret-icon mr-2"></b-icon-caret-down-fill>
      </b-button>
    </b-card-header>
    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <div class="component teste">
            <b-form-tags v-model="value" no-outer-focus class="mb-2" size="sm" tag-pills>
              <template v-slot="{ tags, inputAttrs, inputHandlers, addTag, removeTag }">
                <b-input-group class="mb-2" size="sm">
                  <b-form-input v-bind="inputAttrs" v-on="inputHandlers" placeholder="New tag - Press enter to add" class="form-control"></b-form-input>
                  <b-input-group-append>
                    <b-button @click="addTag()" variant="primary">Add</b-button>
                  </b-input-group-append>
                </b-input-group>
                <div class="d-inline-block" style="font-size: 1.5rem;">
                  <b-form-tag
                  v-for="tag in tags"
                  @remove="removeTag(tag)"
                  :key="tag"
                  :title="tag"
                  :tag-pills
                  class="mr-1">{{ tag }}</b-form-tag>
                </div>
              </template>
            </b-form-tags>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      value: ['apple']
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
</style>
