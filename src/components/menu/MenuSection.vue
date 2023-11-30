<script>
import axios from "axios";
import { store } from "../../data/store";
import PlateCard from "./PlateCard.vue";


export default {
  data() {
    return {
      
    };
  },

  components: {  PlateCard }
}
</script>

<template>
    <div class="restaurants-menu">
        <div class="container-menu">
        <div class="container">
            <h2 class="title-menu">Il nostro menù</h2>
            <div class="row">
                <PlateCard />   
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
  min-height: 50vh;
  height: 100%;
}
.container-menu {
  background-color: rgba($color: #000, $alpha: 0.8);
  padding: 0.5rem;
  width:100%;
  padding-top: 5rem;
}

.title-menu {
  text-align: center;
  color: #d7d3d3;
  font-weight: 700;
  font-size: 5rem;
}
</style>
