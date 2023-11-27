<script>
import NavbarUi from './components/ui/NavbarUi.vue';
import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView,
    NavbarUi,
  },
};
</script>

<template>
  <NavbarUi/>
  <RouterView/>
</template>

<style scoped>

</style>
