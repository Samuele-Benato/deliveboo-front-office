<script>
import { RouterView } from "vue-router";
export default {
  props: {
    restaurant: Object,
  },

  methods: {
    selectRestaurant(restaurantId) {
      this.$store.commit("selectRestaurant", restaurantId);
    },
  },
};
</script>

<template>
  <div class="_area text-center">
    <div class="_card">
      <img :src="restaurant.image" class="_img" />
      <div class="_card_detail text-left">
        <h4>{{ restaurant.name }}</h4>
        <p>
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <span class="ms-2">{{ restaurant.address }}</span>
        </p>

        <div class="_type">
          <span class="fw-bold" v-for="type in restaurant.types" :key="type.id">
            {{ type.name }}
          </span>
        </div>

        <router-link
          class="menu-tag"
          @click="selectRestaurant(restaurantId)"
          :to="{
            name: 'plates-by-restaurant',
            params: {
              restaurantId: restaurant.id,
            },
          }"
        >
          <div class="menu">
            Menù <font-awesome-icon :icon="['fas', 'utensils']" />
          </div>
        </router-link>

        <div class="_detail">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <span class="ms-2">{{ restaurant.phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
._area {
  font-family: "Cairo", sans-serif;
  color: #7c7671;
}

._card {
  max-width: 350px;
  margin: auto;
  cursor: pointer;
  display: inline-block;
  color: unset;
}

._card:hover {
  transform: scale(1.05);
  transition: 0.2s linear;
}

._img {
  border-radius: 10px;
  width: 350px;
  height: 250px;
}

._card_detail {
  box-shadow: 0 4px 15px rgba(175, 77, 0, 0.13);
  padding: 13px;
  border-radius: 8px;
  margin: -30px 10px 0;
  position: relative;
  z-index: 2;
  background-color: #262424;
}
._card_detail h4 {
  color: #e6d7cc;
  line-height: 100%;
  font-weight: bold;
}
._card_detail p {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 0.4rem;
}
._type span {
  background-color: #9f9791;
  padding: 5px 10px 7px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 10px;
  font-size: 12px;
  color: #45413e;
  font-weight: bold;
  line-height: 100%;
}

._detail {
  margin-top: 10px;
  padding: 5px;
  background-color: #e6d7cc;
  color: #262424;
  font-weight: bold;
  border-radius: 10px;
}

.menu {
  margin-top: 10px;
  padding: 5px;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
}
.menu:hover {
  transform: scale(1.5);
  transition: 0.3s linear;
}
.menu-tag {
  text-decoration: none;
  background-color: #262424;
  color: #e6d7cc;
}
</style>
