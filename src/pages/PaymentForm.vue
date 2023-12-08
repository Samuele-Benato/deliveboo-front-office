<template>
  <div class="wrapper-form">
    <div class="container">
      <h1>{{ title }}</h1>

      <!-- Mostra il messaggio di successo -->
      <div v-if="orderCompleted" class="order-success-message mt-5">
        Complimenti, hai completato il tuo ordine! Controlla la tua email per
        effettuare il pagamento.
      </div>

      <div class="row my-5">
        <form @submit.prevent="showSuccessMessage">
          <div class="mb-3">
            <label for="name" class="form-label">Nome:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="formData.name"
              required
            />
          </div>

          <div class="mb-3">
            <label for="lastname" class="form-label">Cognome:</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              v-model="formData.lastname"
              required
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="formData.email"
              required
            />
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label">Telefono:</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              v-model="formData.phone"
              required
            />
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">Indirizzo:</label>
            <input
              type="text"
              class="form-control"
              id="address"
              v-model="formData.address"
              required
            />
          </div>

          <!-- Visualizza il totale -->
          <div class="mb-3">
            <span class="details-total">
              Totale € {{ calculateItemTotal.toFixed(2) }}
            </span>
          </div>

          <!-- Bottone di invio -->
          <div>
            <button
              type="submit"
              class="btn btn-primary"
              @click="goToSuccessPage"
              :disabled="!isFormValid"
            >
              Procedi per il pagamento
            </button>
          </div>
        </form>

        <!-- Bottone per navigare alla pagina di successo -->
        <!-- <button
          v-if="orderCompleted"
          class="btn btn-success mt-3"
          @click="goToSuccessPage"
        >
          Vai alla pagina dei pagamenti
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import SuccessForm from "./SuccessForm.vue";
export default {
  data() {
    return {
      title: "Completa il tuo ordine",
      formData: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
      },
      orderCompleted: false,
    };
  },
  components: { SuccessForm },

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
  },

  methods: {
    showSuccessMessage() {
      if (this.isFormValid) {
        setTimeout(() => {
          this.orderCompleted = true;
          this.$store.commit("clearCart");
        }, 500);
      } else {
        alert("Completa tutti i campi del form prima di inviare.");
      }
    },

    goToSuccessPage() {
      this.$router.push({ name: "success" });
    },
  },
};
</script>

<style lang="scss" scoped>
.order-success-message {
  color: green;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
}
</style>
