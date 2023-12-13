<script>
import ConfirmPage from "./ConfirmPage.vue";

export default {
  data() {
    return {
      total_orders: 0,
      formData: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        total_orders: 25,
      },
      orderCompleted: false,
    };
  },
  components: { ConfirmPage },
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
    submitForm() {
      if (!this.formData.name) {
        this.errors.name = "Inserisci il nome.";
        return;
      } else {
        this.errors.name = "";
      }

      if (!this.formData.lastname) {
        this.errors.lastname = "Inserisci il cognome.";
        return;
      } else {
        this.errors.lastname = "";
      }
      if (!this.formData.address) {
        this.errors.address = "Inserisci l'indirizzo.";
        return;
      } else {
        this.errors.address = "";
      }
      if (!this.formData.phone) {
        this.errors.phone = "Inserisci un numero di telefono.";
        return;
      } else {
        this.errors.phone = ""; // Cancella eventuali errori precedenti
      }

      if (isNaN(this.formData.phone)) {
        this.errors.phone = "Inserisci un numero di telefono valido.";
        return;
      } else {
        this.errors.phone = ""; // Cancella eventuali errori precedenti
      }
      if (!this.formData.email) {
        this.errors.email = "Inserisci un indirizzo mail valido.";
        return;
      } else {
        this.errors.email = "";
      }

      // this.payWithCard();
      // // Aggiungi l'array cart al formData
      // this.formData.cart = this.cart;
      // // chiamata axios che manda i dati al back-end (Orders)
      axios
        .post("http://localhost:8000/api/orders", this.formData)
        .then((response) => {
          console.log("Dati inviati con successo:", response.data);
        });
    },

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
      // Passa i dati del modulo a ConfirmPage
      this.$router.push({
        name: "success",
        query: { name: this.formData.name },
      });
    },
  },
};
</script>

<template>
  <div class="order-background">
    <div class="order-container">
      <!-- Mostra il messaggio di successo -->
      <div v-if="orderCompleted" class="order-success-message mt-5">
        Complimenti, hai completato il tuo ordine! Controlla la tua email per
        effettuare il pagamento.
      </div>

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

          <!-- !BOTTONE PER PAYMENTFAKE -->
          <!-- <button
              type="submit"
              class="payment-btn"
              @click="goToSuccessPage"
              :disabled="!isFormValid"
            >
              Procedi al pagamento
            </button> -->
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
.payment-btn {
  background-color: #222;
  border-radius: 10px;
  color: #c5b7d1;
  font-weight: 600;
  padding: 5px 10px;
  border: none;
}
.payment-btn:hover {
  transform: scale(1.05);
  transition: 0.3s linear;
  background-color: rgba($color: #222, $alpha: 0.8);
  color: #aa9709;
  box-shadow: 1px 1px 8px 2px #222 !important;
}
.width-50 {
  width: 50%;
}
@media (max-width: 768px) {
  .width-50 {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
