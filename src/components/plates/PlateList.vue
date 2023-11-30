<script>
// import MyComponent from "./components/MyComponent.vue";
import axios from "axios";
import { store } from "../../data/store";

export default {
  data() {
    return {
      plates: [],
    };
  },

  // components: {
  //   MyComponent,
  // },

  methods: {
    fetchPlates() {
      axios
        .get(
          store.api.baseUrl +
            "plates-by-restaurant/" +
            this.$route.params.restaurantId
        )
        .then((response) => {
          console.log(response); // Aggiungi questa riga per vedere cosa restituisce la chiamata API
          this.plates = response.data.data;
        });
    },

    // fetchTypes() {
    //   axios.get(store.api.baseUrl + "types").then((response) => {
    //     this.types = response.data.map((type) => {
    //       return {
    //         ...type,
    //         active: false,
    //       };
    //     });
    //   });
    // },

    // toggleType(type) {
    //   type.active = !type.active;
    //   this.fetchRestaurants();
    // },

    // computed: {
    // //   activeFilters() {
    // //     const activeTypes = [];

    // //     this.types.forEach((type) => {
    // //       if (type.active) activeTypes.push(type.id);
    // //     });

    // //     return {
    // //       activeTypes,
    // //     };
    // //   },
    // },

    created() {
      //   this.fetchTypes();
      this.fetchPlates();
      // this.fetchRestaurantList();
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div v-for="plate in plates" :key="plate.id">
      <h1>{{ plate.name }}</h1>
    </div>
    <h1>Piatti</h1>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-top: 200px;
}
</style>
