<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card border-0">
          <div class="card-body p-4">
            <div class="row">
              <div class="col-lg-7">
                <h5 class="mb-3">
                  <router-link :to="{ name: 'home' }" class="text-body"
                    ><i class="fas fa-long-arrow-alt-left me-2"></i>Continua
                    shopping</router-link
                  >
                </h5>
                <hr />

                <div
                  class="d-flex justify-content-between align-items-center mb-4"
                >
                  <div>
                    <p class="mb-0">
                      Hai {{ cartItemCount }} articoli nel tuo carrello
                    </p>
                  </div>
                </div>

                <div
                  v-for="plate in cartItems"
                  class="card mb-3 shadow-sm border-0"
                  :key="plate.id"
                >
                  <div class="card-body">
                    <div class="row">
                      <!-- Prima colonna -->
                      <div class="col">
                        <div class="d-flex flex-row align-items-center">
                          <div>
                            <img
                              :src="plate.image"
                              class="img-fluid rounded-3"
                              alt="Shopping plate"
                              style="width: 65px"
                            />
                          </div>
                          <div class="ms-3">
                            <p>{{ plate.name }}</p>
                          </div>
                        </div>
                      </div>

                      <!-- Seconda colonna -->
                      <div class="col">
                        <div
                          class="d-flex flex-row align-items-center justify-content-center"
                        >
                          <div>
                            <CartAddRemove :plate="plate" />
                          </div>
                        </div>
                      </div>

                      <!-- Terza colonna -->
                      <div class="col">
                        <div
                          class="d-flex flex-row align-items-center justify-content-around"
                        >
                          <div>
                            <h5 class="mb-0">
                              <i class="me-1">€</i
                              >{{ calculateItemTotal(plate) }}
                            </h5>
                          </div>
                          <a
                            role="button"
                            @click="removeItem(plate)"
                            class="ms-2"
                            style="color: white"
                          >
                            <span>🗑️</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="card bg-primary text-white rounded-0 border-0">
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between align-items-center mb-4"
                    >
                      <h5 class="mb-0">Dettagli Carrello</h5>
                      <i class="bi bi-cart3 h1"></i>
                    </div>
                    <hr class="my-4" />
                    <!-- Subtotal -->
                    <!-- <div class="d-flex justify-content-between">
                      <p class="mb-2">Subtotale</p>
                      <p class="mb-2">€ {{ cartTotal.toFixed(2) }}</p>
                    </div> -->

                    <!-- Total -->
                    <div class="d-flex justify-content-between mb-4">
                      <p class="mb-2">Totale</p>
                      <p class="mb-2">€ {{ cartTotal.toFixed(2) }}</p>
                    </div>

                    <button type="button" class="btn btn-info btn-block btn-lg">
                      Vai al pagamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartAddRemove from "../CartAddRemove.vue";
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
