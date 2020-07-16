<template>
<b-col class="mb-2 pb-3 search-component">
  <div class="d-flex justify-content-end" style="color:white;  font-size:24px">
    <p class="bullet-menu"><b-icon-three-dots></b-icon-three-dots></p>
  </div>
  <b-img class="mt-5 pt-2 mb-3 w-50" src="../assets/logo.jpg" fluid alt="Responsive image"></b-img>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-input class="search-input-field mr-3 algin-self-center d-inline-flex w-80" v-model="form.search" placeholder="Insira sua busca aqui..."></b-form-input>
    <b-col class="d-flex justify-content-end w-75 m-auto">
      <b-button size="sm" variant="dark" class="mt-3 mb-4" type="submit">Pesquisar<b-icon-arrow-right-short class="ml-2 arrow-svg"></b-icon-arrow-right-short>
      </b-button>
    </b-col>
  </b-form>
</b-col>
</template>

<script>
export default {
  name: 'SearchField',
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
      alert(JSON.stringify(this.form))
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
}
.search-input-field {
  border-radius: 25px;
  width: 75%;
}
.w-80 {
  width: 80%;
}
.arrow-svg {
  transform: scale(1.3);
}
.bullet-menu{
position:absolute;
right:20px;
top:10px;
}
</style>
