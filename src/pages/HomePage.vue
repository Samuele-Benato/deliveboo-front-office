<script>
import JumbotronHomepage from "../components/homepage/JumbotronHomepage.vue";
import RestaurantsTypeSection from "../components/homepage/RestaurantsTypeSection.vue";
// import FilterType from "../components/homepage/FilterType.vue";

export default {
  components: {
    JumbotronHomepage,
    RestaurantsTypeSection,
    // FilterType,
  },
};
</script>

<template>
  <JumbotronHomepage />
  <!-- <FilterType /> -->
  <RestaurantsTypeSection />
</template>

<style lang="scss" scoped></style>
