<template>
<b-col class="search-component mb-2">
  <div class="d-flex justify-content-between mt-3" style="color:white;  font-size:24px">
    <b-button v-b-toggle.sidebar-1 size="sm" variant="dark" class="d-md-none d-block float-left sticky-top">Filtros<b-icon icon="filter" class="ml-1"></b-icon>
    </b-button>
    <p class="bullet-menu align-middle mb-0 float-right position-absolute">
      <b-icon-three-dots></b-icon-three-dots>
    </p>
  </div>
  <b-img class="mt-2 mx-auto pt-2 mb-3 logo" src="../assets/logo.jpg" fluid alt="Responsive image"></b-img>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-input class="search-input-field algin-self-center d-inline-flex" v-model="form.search" placeholder="Insira sua busca aqui..."></b-form-input>
    <b-col cols="auto" class="w-75 mx-auto mt-3 justify-content-center">
      <b-button size="sm" variant="dark" class="float-right mb-4" type="submit">Pesquisar<b-icon-arrow-right-short class="ml-2 arrow-svg"></b-icon-arrow-right-short>
      </b-button>
    </b-col>
  </b-form>
</b-col>
</template>

<script>
import app from '../App.vue'
export default {
  name: 'SearchField',
  component: app,
  data() {
    return {
      form: {
        search: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form.search))
      if (JSON.stringify(this.form.search).replace(/['"]+/g, '') === "ACS" || JSON.stringify(this.form.search).replace(/['"]+/g, '') === "acs" ) {
        alert("Achamos o que você procura!")
        this.$parent.$parent.currentTab = this.$parent.$parent.tabs[1]
        // window.open('https://dropescan.com/','_blank');
      } else {
        alert("Desculpe, por hora, ainda não é possível realizar pesquisas.")
        alert("Para que possa ter um exemplo do que será futuramente,\ndigite o termo 'ACS' na barra de pesquisa com os seguintes filtros:\nRegião: Equador;\nPeríodo de tempo: Nos últimos dias.")

        // window.open('https://neoxscans.com/','_blank');
      }
    },
    onReset( /*evt*/ ) {
      // evt.preventDefault()
      // // Reset our form values
      // this.form.email = ''
      // this.form.name = ''
      // this.form.food = null
      // this.form.checked = []
      // // Trick to reset/clear native browser form validation state
      // this.show = false
      // this.$nextTick(() => {
      //   this.show = true
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-component {
  background-color: #292a2d;
  border-radius: 10px;
  min-height:245px;
}
.search-input-field {
  border-radius: 25px;
  width: 80%!important;
}
.arrow-svg {
  transform: scale(1.3);
}
.bullet-menu {
  position: absolute;
  right: 20px;
  top: 10px;
}
.logo{
  width:50%!important;
}

@media (max-width: 575.98px) {
  .search-input-field {
    width: 95%!important;
  }
  .logo{
    width:75%!important;
  }
}
</style>
