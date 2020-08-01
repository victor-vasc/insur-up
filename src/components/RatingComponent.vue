<template>
  <div class="">
  <b-link class="p-2" v-on:click="changeRating(0)">
    <b-icon v-bind:variant="upRatingColor" font-scale="2" icon="chevron-up"></b-icon>
  </b-link>
  <b-link class="p-2" v-on:click="changeRating(1)">
    <b-icon v-bind:variant="downRatingColor" font-scale="2" icon="chevron-down"></b-icon>
  </b-link>
</div>
</template>

<script>
export default {
  name: 'RatingComponent',
  data() {
    return {
      downRating: false,
      upRating: false,
    }
  },
  computed: {
    upRatingColor() {
      return this.upRating ? "info" : "secondary"; //<--- define condition/s
    },
    downRatingColor() {
      return this.downRating ? "danger" : "secondary"; //<--- define condition/s
    },
  },
  methods: {
    changeRating(obj) {
      if (obj === 0) {
        this.upRating = !this.upRating
        if (this.upRating === true && this.upRating === this.downRating) {
          this.downRating = !this.downRating
          return
        }
      } else if (obj === 1) {
        this.downRating = !this.downRating
        if (this.downRating === true && this.downRating === this.upRating) {
          this.upRating = !this.upRating
          return
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
