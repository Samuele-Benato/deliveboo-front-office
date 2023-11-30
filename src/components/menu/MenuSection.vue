<script>
import axios from "axios";
import { store } from "../../data/store";
import PlateCard from "./PlateCard.vue";

export default {
  data() {
    return {
      plates: [],
    };
  },

  components: { PlateCard },

  methods: {
    detailRestaurant(plate, index) {
      return (
        index === 0 ||
        plate.restaurant.id !== this.plates[index - 1].restaurant.id
      );
    },

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
  <div class="restaurants-menu">
    <div class="container-menu">
      <div class="container">
        <h2 class="title-menu">Il nostro ristorante</h2>
        <div
          class="text-center my-3"
          v-for="(plate, index) in plates"
          :key="index"
        >
          <h3 v-if="detailRestaurant(plate, index)">
            <h4>{{ plate.restaurant.name }}</h4>
            <h4>{{ plate.restaurant.address }}</h4>
            <h4>{{ plate.restaurant.description }}</h4>
            <h4>{{ plate.restaurant.phone }}</h4>
          </h3>
        </div>
        <h2 class="title-menu">Il nostro menù</h2>
        <div class="row">
          <PlateCard v-for="plate in plates" :key="plate.id" :plate="plate" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.restaurants-menu {
  background-image: url("img/menu-background.jpg");
  background-size: 100%;
  background-position: start;
  background-attachment: fixed;
  min-height: 50vh;
  height: 100%;
}
.container-menu {
  background-color: rgba($color: #000, $alpha: 0.8);
  padding: 0.5rem;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 5rem;
}

.title-menu {
  text-align: center;
  color: #d7d3d3;
  font-weight: 700;
  font-size: 5rem;
  margin-top: 2rem;
}
</style>
