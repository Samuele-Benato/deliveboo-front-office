<script>
import axios from "axios";
import { store } from "../../data/store";
import PlateCard from "./PlateCard.vue";


export default {
  data() {
    return {
      plates:[],
    };
  },

  components: {  PlateCard },

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
}
</script>

<template>
    <div class="restaurants-menu">
        <div class="container-menu">
        <div class="container">
            <h2 class="title-menu">Il nostro menù</h2>
            <div class="row">
              <PlateCard  v-for="plate in plates" :key="plate.id" :plate="plate"/>  
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
  width:100%;
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
