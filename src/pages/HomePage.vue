<script>
import JumbotronHomepage from "../components/homepage/JumbotronHomepage.vue";
import NewEntry from "../components/homepage/NewEntry.vue";
import RestaurantsTypeSection from "../components/homepage/RestaurantsTypeSection.vue";
import FooterSection from "../components/homepage/FooterSection.vue";
// import FilterType from "../components/homepage/FilterType.vue";


export default {
  components: {
    JumbotronHomepage,
    NewEntry,
    RestaurantsTypeSection,
    FooterSection,
    // FilterType,
  },
};
</script>

<template>
  <JumbotronHomepage />
  <NewEntry/>
  <!-- <FilterType /> -->
  <RestaurantsTypeSection />
  <FooterSection />
</template>

<style lang="scss" scoped></style>
