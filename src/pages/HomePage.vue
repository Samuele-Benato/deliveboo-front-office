<script>
import JumbotronHomepage from "../components/homepage/JumbotronHomepage.vue";
import RestaurantsTypeSection from "../components/homepage/RestaurantsTypeSection.vue";
import AdvancedFilterType from "./AdvancedFilterType.vue";

export default {
  components: {
    JumbotronHomepage,
    RestaurantsTypeSection,
    AdvancedFilterType,
  },
};
</script>

<template>
  <JumbotronHomepage />
  <AdvancedFilterType />
  <RestaurantsTypeSection />
</template>

<style lang="scss" scoped></style>
