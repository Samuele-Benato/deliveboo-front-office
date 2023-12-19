<script>
import axios from "axios";
import { store } from "../../data/store";

export default {
  data() {
    return {
      formData: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        total_orders: "",
        cart: [],
      },
      orderCompleted: false,
    };
  },
  computed: {
    calculateItemTotal() {
      return this.$store.state.cart.reduce(
        (total, plate) => total + plate.price * plate.qty,
        0
      );
    },
    isFormValid() {
      return (
        this.formData.name &&
        this.formData.lastname &&
        this.formData.email &&
        this.formData.phone &&
        this.formData.address
      );
    },

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
    submitForm() {
      const itemTotal = this.calculateItemTotal;
      this.formData.total_orders = itemTotal;
      const itemCart = this.cartItems;
      this.formData.cart = itemCart;

      axios
        .post(store.api.baseUrl + "orders", this.formData)
        .then((response) => {
          console.log("Dati inviati con successo:", response.data);

          if (response.status === 201) {
            this.orderCompleted = true;
            this.$store.commit("clearCart");
            this.formData = {
              name: "",
              lastname: "",
              email: "",
              phone: "",
              address: "",
              total_orders: "",
              cart: [],
            };
          }
        })
        .catch((error) => {
          console.error("Errore nella richiesta POST:", error);
        });
    },
  },
};
</script>

<template>
  <div class="order-background">
    <div class="order-container">
      <form class="ms-auto row my-2 width-50" @submit.prevent="submitForm">
        <div class="col-md-6 col-12 mb-3">
          <label for="name" class="form_label">Nome:</label>
          <input
            type="text"
            class="input-form"
            id="name"
            v-model="formData.name"
            required
          />
        </div>

        <div class="col-md-6 col-12 mb-3">
          <label for="lastname" class="form_label">Cognome:</label>
          <input
            type="text"
            class="input-form"
            id="lastname"
            v-model="formData.lastname"
            required
          />
        </div>

        <div class="col-md-6 col-12 mb-3">
          <label for="email" class="form_label">Email:</label>
          <input
            type="email"
            class="input-form"
            id="email"
            v-model="formData.email"
            required
          />
        </div>

        <div class="col-md-6 col-12 mb-3">
          <label for="phone" class="form_label">Telefono:</label>
          <input
            type="text"
            class="input-form"
            id="phone"
            v-model="formData.phone"
            required
          />
        </div>

        <div class="mb-3">
          <label for="address" class="form_label">Indirizzo:</label>
          <input
            type="text"
            class="input-form"
            id="address"
            v-model="formData.address"
            required
          />
        </div>

        <!-- Bottone di invio -->
        <div class="text-center">
          <button type="submit" class="btn btn-primary mt-4">Invia dati</button>
        </div>
      </form>
    </div>
    <div v-if="orderCompleted" class="order-success-message mt-5">
      Complimenti, hai completato il tuo ordine! Controlla la tua email per
      effettuare il pagamento.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-background {
  background-image: url("img/order-background.jpg");
  background-size: 100%;
  background-size: cover;
  background-position: start;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 80vh;
}
.order-container {
  background-color: rgba($color: #000, $alpha: 0.7);
  width: 100%;
  min-width: 400px;
  height: 100%;
  min-height: 80vh;
  padding-top: 8rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  align-items: center;
}
.form_label {
  display: block;
  text-align: center;
  color: #dadada;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.25rem;
}
.text-center {
  text-align: center;
  margin: 1.5rem 0;
}
.input-form {
  background-color: #704f97;
  border-radius: 5px;
  color: #dadada;
  font-weight: 600;
  padding: 7px 10px;
  border: none;
  display: block;
  width: 100%;
}
</style>
