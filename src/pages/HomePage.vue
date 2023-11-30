<script>
import JumbotronHomepage from "../components/homepage/JumbotronHomepage.vue";
import RestaurantsTypeSection from "../components/homepage/RestaurantsTypeSection.vue";
// import FilterType from "../components/homepage/FilterType.vue";
import MenuSection from "../components/menu/MenuSection.vue";

export default {
  components: {
    JumbotronHomepage,
    RestaurantsTypeSection,
    MenuSection,
    // FilterType,
  },
};
</script>

<template>
  <JumbotronHomepage />
  <!-- <FilterType /> -->
  <RestaurantsTypeSection />
  <MenuSection />
</template>

<style lang="scss" scoped></style>
