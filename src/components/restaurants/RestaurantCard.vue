<script>
export default {
  props: {
    restaurant: Object,
  },
};
</script>

<template>
  <div>
    <h3>{{ restaurant.name }}</h3>

    <span class="fw-bold" v-for="type in restaurant.types" :key="type.id">
      {{ type.name }},
    </span>

    /*
    <img
      v-if="restaurant.image"
      :src="restaurant.image"
      class="img-fluid mb-1 rounded"
      alt=""
    />
    */

    <h5>{{ restaurant.address }}</h5>
    <h5>{{ restaurant.description }}</h5>
    <h5>{{ restaurant.phone }}</h5>
  </div>
</template>
