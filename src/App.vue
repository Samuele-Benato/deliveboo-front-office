<script>
import NavbarUi from './components/ui/NavbarUi.vue';
import { RouterView } from 'vue-router';
import FooterSection from './components/ui/FooterSection.vue';

export default {
  components: {
    RouterView,
    NavbarUi,
    FooterSection,
  },
};
</script>

<template>
  <NavbarUi/>
  <RouterView/>
  <FooterSection/>
</template>

<style scoped>

</style>
