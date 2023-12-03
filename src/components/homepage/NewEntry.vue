<script>
// import axios from "axios";
// import { store } from "../../data/store";
// // import RestaurantList from "../restaurants/RestaurantList.vue";
// import RestaurantCard from "../restaurants/RestaurantCard.vue";
// // import PaginationUi from "../ui/PaginationUi.vue";

// export default {
//   data() {
//     return {
//       restaurants: [],
//       // pagination: [],
//       filteredRestaurants: [],
//       types: [],
//     };
//   },

//   components: {  RestaurantCard },

//   methods: {

//     // fetchRestaurants(uri = store.api.baseUrl + "restaurants") {
//     //   axios
//     //     .get(uri)
//     //     .then((response) => {
//     //       this.restaurants = response.data.data;
//     //       //  console.log(this.restaurants);
//     //       this.pagination = response.data.links;
//     //       //   console.log(this.pagination);
//     //     })
//     //     .catch((error) => {
//     //       console.error("Errore nella chiamata API", error);
//     //     });
//     // },

//     fetchRestaurants() {
//       axios
//         .post(
//           store.api.baseUrl + "get-restaurants-by-filters",
//           this.activeFilters
//         )
//         .then((response) => {
//           this.filteredRestaurants = response.data.data;
//         });
//     },

//     fetchTypes() {
//       axios.get(store.api.baseUrl + "types").then((response) => {
//         this.types = response.data.map((type) => {
//           return {
//             ...type,
//             active: false,
//           };
//         });
//       });
//     },

//     toggleType(type) {
//       type.active = !type.active;
//       this.fetchRestaurants();
//     },
//   },

//   computed: {
//     activeFilters() {
//       const activeTypes = [];

//       this.types.forEach((type) => {
//         if (type.active) activeTypes.push(type.id);
//       });

//       return {
//         activeTypes,
//       };
//     },
//   },

//   created() {
//     this.fetchTypes();
//     this.fetchRestaurants();
//   },
// };
</script>

<!-- <template>
  <div id="type" class="restaurants-type">
    <div class="container-type-section"> 

      <div class="container">
          <div class="row">
            <RestaurantCard class="my-3 col-lg-6 col-xxl-4" v-for="restaurant in filteredRestaurants" :key="restaurant.id" :restaurant="restaurant"/>  
          </div>
      </div>

    </div>
  </div>
</template> -->

<style lang="scss" scoped>

.restaurants-type {
  background-image: url("");
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
  bottom: 90%;
  background: linear-gradient(to bottom, rgba(68, 68, 68, 1) 10%, rgba(68, 68, 68, 0.7) 30%, rgba(68, 68, 68, 0.4) 60%, rgba(68, 68, 68, 0) 100%);
  opacity: 1;
}

.container-type-section {
  background-color: rgba($color: #000, $alpha: 0.7);
  padding: 0.5rem;
  width:100%;
  min-height: 50vh;
  height: 100%;
  padding-top: 7rem;
}

.title-type-section {
  text-align: center;
  color: #d7d3d3;
  font-weight: 700;
  font-size: 3rem;
}
</style>
