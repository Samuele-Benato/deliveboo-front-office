<script>
import NavbarUi from "./components/ui/NavbarUi.vue";
import { RouterView } from "vue-router";
import FooterSection from "./components/ui/FooterSection.vue";

export default {
  async mounted() {
    await this.$store.commit("initialiseStore");
  },
  components: {
    RouterView,
    NavbarUi,
    FooterSection,
  },
};
</script>

<template>
  <NavbarUi />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>
