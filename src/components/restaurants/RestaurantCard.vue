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

    <h5>{{ restaurant.address }}</h5>
    <h5>{{ restaurant.description }}</h5>
    <h5>{{ restaurant.phone }}</h5>
  </div>
</template>
