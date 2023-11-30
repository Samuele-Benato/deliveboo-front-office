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
          console.log(response.data); // Aggiungi questa riga per vedere cosa restituisce la chiamata API
          this.plates = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching plates:", error);
        });
    },
  },

  created() {
    this.fetchPlates();
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1>Piatti</h1>
      <div class="row">
        <div v-for="plate in plates" :key="plate.id" class="col-md-4 my-2">
          <div class="card">
            <img :src="plate.image" class="card-img-top" alt="Plate Image" />
            <div class="card-body">
              <h5 class="card-title">{{ plate.name }}</h5>
              <p class="card-text">{{ plate.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-top: 100px;
}

.card {
  height: 100%;
  margin: 10px;
}
</style>
