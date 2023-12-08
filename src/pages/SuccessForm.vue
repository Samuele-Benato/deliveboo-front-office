<script>
export default {
  data() {
    return {
      showCongratulations: false,
      creditCardNumber: "",
      expirationDate: "",
      cvv: "",
      validationError: null,
    };
  },
  computed: {
    calculateItemTotal() {
      return this.$store.state.cart.reduce(
        (total, plate) => total + plate.price * plate.qty,
        0
      );
    },
  },
  methods: {
    handlePayment() {
      // Validazione della lunghezza della carta di credito e del CVV
      if (this.creditCardNumber.length !== 12) {
        this.validationError =
          "Il numero della carta di credito deve essere di 12 cifre.";
        return;
      }

      if (this.cvv.length !== 3) {
        this.validationError = "Il CVV deve essere di 3 cifre.";
        return;
      }

      // Se la validazione ha successo, procedi con il pagamento
      // Aggiungi la logica di pagamento qui

      // Dopo aver gestito il pagamento con successo, imposta showCongratulations su true
      this.showCongratulations = true;

      // Svuota il form
      this.creditCardNumber = "";
      this.expirationDate = "";
      this.cvv = "";

      // Svuota il carrello
      this.$store.commit("clearCart");
    },
  },
};
</script>

<template>
  <div class="success-page">
    <!-- Visualizza il messaggio di errore se presente -->

    <!-- Visualizza il messaggio di congratulazioni solo se showCongratulations è true -->
    <div v-if="showCongratulations" class="success-message">
      <h1 class="text-success">
        Congratulazioni, pagamento effettuato con successo!
      </h1>
      <h4 class="text-success">
        Hai completato il tuo ordine. Ora puoi controllare lo stato di
        avanzamento nella tua casella postale.
      </h4>
    </div>

    <!-- Nascondi il form di pagamento se showCongratulations è true -->
    <div v-if="!showCongratulations" class="payment-form">
      <h2>Inserisci i dati di pagamento:</h2>
      <!-- Aggiungi qui il tuo formulario di pagamento -->
      <!-- Ad esempio, campi per numero carta di credito, scadenza, CVV, etc. -->
      <form @submit.prevent="handlePayment">
        <!-- Campi del formulario -->
        <label for="creditCardNumber">Numero carta di credito:</label>
        <input
          type="text"
          id="creditCardNumber"
          v-model="creditCardNumber"
          required
        />

        <label for="expirationDate">Scadenza:</label>
        <input
          type="text"
          id="expirationDate"
          v-model="expirationDate"
          required
        />

        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" v-model="cvv" required />
        <div v-if="validationError" class="error-message text-danger">
          {{ validationError }}
        </div>
        <!-- Aggiungi altri campi a seconda delle tue esigenze -->

        <button type="submit">
          Effettua il pagamento di €{{ calculateItemTotal.toFixed(2) }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.success-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.success-message {
  text-align: center;
  margin-bottom: 20px;
}

.payment-form {
  max-width: 400px;
  width: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.payment-form label {
  display: block;
  margin-bottom: 8px;
}

.payment-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}

.payment-form button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
