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
      <div
          v-for="(plate, index) in plates"
          :key="index"
        >
          <div v-if="detailRestaurant(plate, index)" class="restaurant-detail">
            <h4 class="restaurant-title">Grazie per aver scelto {{ plate.restaurant.name }}</h4>
            <span class="restaurant-address"><font-awesome-icon :icon="['fas', 'location-dot']" /><span class="ms-2">{{ plate.restaurant.address }}</span></span>
            <span class="restaurant-phone"><font-awesome-icon :icon="['fas', 'phone']" /><span class="ms-2">+{{ plate.restaurant.phone }}</span></span>
          </div>
        </div>
    <div class="container-menu">
        <h2 class="title-menu">Il nostro menù :</h2>
        <div class="row">
          <PlateCard  v-for="plate in plates" :key="plate.id" :plate="plate" />
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.restaurants-menu {
  background-image: url("img/menu-background.jpg");
  background-size: 100%;
  background-size: cover;
  background-position: start;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 50vh;
  height: 100%;
}
.container-menu {
  background-color: rgba($color: #000, $alpha: 0.8);
  width: 100%;
  min-width: 540px;
  min-height: 100vh;
  height: 100%;
  padding-top: 1rem;
  padding-left: 3rem;
}

.title-menu {
  color: #d7d3d3;
  font-weight: 700;
  font-size: 5rem;
  margin-top: 1.5rem;
}
.restaurant-detail{
 padding-bottom: 20px;
  text-align: center;
  background-color: rgba($color: #000000, $alpha: 0.9);
  padding-top: 7rem;
}
.restaurant-title{
  color: #d7d3d3;
  font-weight: 700;
  font-size: 2rem;
}
.restaurant-address,
.restaurant-phone{
  color: #d7d3d3;
  font-size: 1.2rem;
  display: block;
}


/* Schermi con larghezza inferiore a 993px */
@media only screen and (max-width: 992px) {
  .title-menu {
  font-size: 4rem;
}
.restaurant-title{
  font-size: 1.5rem;
}
.restaurant-address,
.restaurant-phone{
  font-size: 1rem;
}
}

@media (max-width: 768px) {
  .title-menu {
  font-size: 3.5rem;
}
.container-menu {
  padding-right: 3rem;
}
}
</style>
