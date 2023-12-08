<script>
import CartAddRemove from "./CartAddRemove.vue";
export default {
  components: { CartAddRemove },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.state.cartTotal;
    },
    cartItemCount() {
      return this.$store.state.cart.length;
    },
  },
  methods: {
    removeItem(plate) {
      this.$store.commit("addRemoveCart", { plate: plate, toAdd: false });
    },
    calculateItemTotal(plate) {
      return (plate.price * plate.qty).toFixed(2);
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="cart-background">
    <div class="cart-overlay">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7 my-4">
            <div class="cart-card">
              <h5 v-if="$store.state.cart.length > 0">
                <router-link :to="{ name: 'home' }" class="cart-title">
                  Continua ad ordinare
                  <font-awesome-icon :icon="['fas', 'cart-arrow-down']" />
                </router-link>
              </h5>
              <h5 v-else>
                <router-link :to="{ name: 'home' }" class="cart-title">
                  Inizia ad ordinare
                  <font-awesome-icon :icon="['fas', 'cart-arrow-down']" />
                </router-link>
              </h5>
              <hr />
              <div>
                <p>Hai {{ cartItemCount }} articoli nel tuo carrello</p>
              </div>

              <div
                v-for="plate in cartItems"
                class="items-card"
                :key="plate.id"
              >
                <div class="row">
                  <!-- Prima colonna -->
                  <div class="col-md-5 col-12">
                    <div class="cart-image-container">
                      <img :src="plate.image" class="cart-image" alt="plate" />
                      <span class="plate-name">{{ plate.name }}</span>
                    </div>
                  </div>

                  <!-- Seconda colonna -->
                  <div class="col-md-4 col-8 quantity">
                    <div class="cartaddremove-container">
                      <CartAddRemove :plate="plate" />
                    </div>
                  </div>

                  <!-- Terza colonna -->
                  <div class=" col-md-3 col-4">
                    <div class="cart-price-container">
                      <div class="total-price">
                        <i class="me-1">€</i>
                        {{ calculateItemTotal(plate) }}
                      </div>
                      <!-- form -->
                      <a role="button" @click="removeItem(plate)">
                        <font-awesome-icon
                          class="trash-icon"
                          :icon="['fas', 'trash-can']"
                        />
                      </a>
                      <!-- /form -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="$store.state.cart.length > 0" class="col-12 col-lg-5 my-4">
            <div class="cart-details">
              <div class="space-between">
                <h5 class="mb-0">Dettagli Carrello</h5>
                <font-awesome-icon :icon="['fas', 'circle-info']" />
              </div>
              <hr />
              <!-- Total -->
              <div class="space-between mb-4">
                <span class="details-total">Totale</span>
                <span class="details-total">€ {{ cartTotal.toFixed(2) }}</span>
              </div>

              <div class="text-center">
                <router-link to="/payment-form">
                  <button type="button" class="btn details-btn">
                    Vai al pagamento
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-background {
  background-image: url("img/cart-background.jpg");
  background-size: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 80vh;
}
.cart-overlay {
  background-color: rgba($color: #000, $alpha: 0.7);
  width: 100%;
  min-width: 400px;
  height: 100%;
  min-height: 80vh;
  padding-top: 6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.cart-card {
  padding: 1.5rem;
  background-color: rgba($color: #222, $alpha: 0.8);
  border-radius: 10px;
  color: #dadada;
}
.items-card {
  padding: 0.15rem 0.5rem;
  margin: 0.75rem 0;
  background-color: rgba($color: #dadada, $alpha: 0.8);
  border-radius: 5px;
  color: #222;
}
.cart-details {
  padding: 1.5rem;
  background-color: rgba($color: #dadada, $alpha: 0.8);
  border-radius: 10px;
  color: #222;
}
.cart-title {
  text-decoration: none;
  color: #dadada;
}
.cart-image {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 5px;
}
.plate-name,
.trash-icon {
  margin-left: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
}
.total-price {
  font-weight: 500;
  font-size: 1.1rem;
  color: #222;
}
.details-total {
  font-weight: 600;
  font-size: 1.15rem;
}
.details-btn {
  padding: 0.25rem 0.5rem;
  background-color: rgba($color: #222, $alpha: 0.8);
  border-radius: 5px;
  color: #dadada;
  font-weight: 500;
}
.details-btn:hover {
  transform: scale(1.05);
  transition: 0.3s linear;
  background-color: rgba($color: #222, $alpha: 0.8);
  color: #dadada;
  box-shadow: 1px 1px 8px 2px #222 !important;
}
.cart-image-container,
.cart-price-container,
.quantity {
  display: flex;
  align-items: center;
}
.quantity {
  justify-content: center;
}
.cart-price-container {
  justify-content: end;
  height: 100%;
}
a {
  text-decoration: none;
}
.space-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
