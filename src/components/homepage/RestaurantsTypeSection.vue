<script>
import axios from "axios";
import { store } from "../../data/store";
// import RestaurantList from "../restaurants/RestaurantList.vue";
import RestaurantCard from "../restaurants/RestaurantCard.vue";
// import PaginationUi from "../ui/PaginationUi.vue";

export default {
  data() {
    return {
      restaurants: [],
      // pagination: [],
      filteredRestaurants: [],
      types: [],
    };
  },

  components: {  RestaurantCard },

  methods: {
    fetchRestaurants() {
      axios
        .post(
          store.api.baseUrl + "get-restaurants-by-filters",
          this.activeFilters
        )
        .then((response) => {
          this.filteredRestaurants = response.data.data;
        });
    },

    fetchTypes() {
      axios.get(store.api.baseUrl + "types").then((response) => {
        this.types = response.data.map((type) => {
          return {
            ...type,
            active: false,
          };
        });
      });
    },

    toggleType(type) {
      type.active = !type.active;
      this.fetchRestaurants();
    },
    // fetchRestaurantList(uri = store.api.baseUrl + "restaurants") {
    //   axios
    //     .get(uri)
    //     .then((response) => {
    //       this.restaurants = response.data.data;
    //       //  console.log(this.restaurants);
    //       this.pagination = response.data.links;
    //       //   console.log(this.pagination);
    //     })
    //     .catch((error) => {
    //       console.error("Errore nella chiamata API", error);
    //     });
    // },
  },

  computed: {
    activeFilters() {
      const activeTypes = [];

      this.types.forEach((type) => {
        if (type.active) activeTypes.push(type.id);
      });

      return {
        activeTypes,
      };
    },
  },

  created() {
    this.fetchTypes();
    this.fetchRestaurants();
    // this.fetchRestaurantList();
  },
};
</script>

<template>
  <div id="type" class="restaurants-type">
    <div class="container-type-section">
      <h2 class="title-type-section">Oggi ho proprio voglia di ...</h2>

      <div class="d-flex justify-content-center align-items-center flex-wrap my-4">
        <span
          class="m-2 badge-types"
          v-for="type in types"
          :key="type.id"
          :class="{ disabled: type.active}"
          @click="toggleType(type)">
          {{ type.name }} 
        </span>
      </div>

      <div v-if="filteredRestaurants.length === 0">
        <p class="title-type-section">
          Nessun ristorante disponibile per la tipologia selezionata.
        </p>
      </div>

      <div v-else  class="container">
          <div class="row">
            <RestaurantCard class="my-3 col-lg-6 col-xxl-4" v-for="restaurant in filteredRestaurants" :key="restaurant.id" :restaurant="restaurant"/>  
          </div>
      </div>

      <!-- <div class="d-flex justify-content-center">
        <PaginationUi :pagination="pagination" @change-page="fetchRestaurants" />
      </div> -->

    </div>
  </div>
</template>

<style lang="scss" scoped>

.badge-types{
  background-color: rgba($color: #d7d3d3, $alpha: 0.8);
  padding: 5px 10px;
  color: #1f1f1f;
  font-weight: 700;
  border-radius: 5px;
}

.badge-types:hover{
  transform: scale(1.1);
  box-shadow: 4px 4px 4px #d7d3d3;
}
.disabled {
  box-shadow: 4px 4px 4px  #d7d3d3 !important;
}
.clickable {
  cursor: pointer;
}
.restaurants-type {
  background-image: url("img/restaurant-type-background.jpeg");
  background-size: 50%;
  background-size: cover;
  background-position: start;
  background-attachment: fixed;
  
  position: relative;
  min-height: 50vh;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: start;
}

.restaurants-type:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 95%;
  background: linear-gradient(to bottom, rgba(68, 68, 68, 1) 10%, rgba(68, 68, 68, 0.7) 30%, rgba(68, 68, 68, 0.4) 60%, rgba(68, 68, 68, 0) 100%);
  opacity: 1;
}

.container-type-section {
  background-color: rgba($color: #000, $alpha: 0.7);
  padding: 0.5rem;
  width:100%;
  min-height: 50vh;
  height: 100%;
  padding: 7rem 0;
}

.title-type-section {
  text-align: center;
  color: #d7d3d3;
  font-weight: 700;
  font-size: 3rem;
}
</style>
