<script>
import RestaurantCard from './RestaurantCard.vue';
export default {
    components: {
    RestaurantCard,
  },

  props:{
      restaurants: Object,
    },
};
</script>

<template>
    <RestaurantCard class="my-3" v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant" />
    <h1>list</h1>
</template>

<style lang="scss">
 
</style>