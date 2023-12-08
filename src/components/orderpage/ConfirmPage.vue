<script>
export default {
  data() {
    return {
      showCongratulations: false,
      owner: "",
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
      if (!/^[a-zA-Z]+$/.test(this.owner)) {
        this.validationError = "Il nome del titolare deve contenere solo lettere";
        return;
      }
      if (this.creditCardNumber.length !== 12) {
        this.validationError =
          "Il numero della carta di credito deve essere di 12 cifre.";
        return;
      }
      if (this.expirationDate.length !== 4) {
        this.validationError = "La scadenza deve essere di 4 cifre.";
        return;
      }

      if (this.cvv.length !== 3) {
        this.validationError = "Il CVV deve essere di 3 cifre.";
        return;
      }
      // Dopo aver gestito il pagamento con successo, imposta showCongratulations su true
      this.showCongratulations = true;

      // Svuota il form
      this.creditCardNumber = "";
      this.expirationDate = "";
      this.cvv = "";
      this.owner = "";

      // Svuota il carrello
      this.$store.commit("clearCart");
    },
  },
};
</script>

<template>
  <div>
    <div v-if="showCongratulations" class="confirm-background">
      <div class="confirm-container justify-content-center">
        <div class="text-center">
          <h1 class="success-title">Complimenti, hai completato il tuo ordine!</h1>
          <p class="success-subtitle">Ce ne occuperemo al più presto.</p>
          <router-link
            class="d-flex align-items-center justify-content-center text-decoration-none"
            :to="{ name: 'home' }"
          >
            <img class="logo-a" src="img/logo.png" alt="Logo" />
            <span class="logo-b">Deliveboo</span>
          </router-link>
        </div>
      </div>
    </div>

    <div v-if="!showCongratulations" class="payment-background">
      <div class="payment-container">
        <form class="me-auto row my-2 w-50" @submit.prevent="handlePayment">
          <div v-if="validationError" class="error-message">
            {{ validationError }}
          </div>
          <div class="col-6">
            <label class="form_label" for="owner">Nome titolare carta:</label>
            <input
              class="input-form"
              type="text"
              id="owner"
              v-model="owner"
              required
            />
          </div>
          <div class="col-6">
            <label class="form_label" for="creditCardNumber">Numero carta di credito:</label>
            <input
              class="input-form"
              type="text"
              id="creditCardNumber"
              v-model="creditCardNumber"
              required
            />
          </div>
          <div class="col-6">
            <label class="form_label" for="expirationDate">Scadenza:</label>
            <input
              class="input-form"
              type="text"
              id="expirationDate"
              v-model="expirationDate"
              required
            />
          </div>

          <div class="col-6">
            <label class="form_label" for="cvv">CVV:</label>
            <input class="input-form" type="text" id="cvv" v-model="cvv" required />
          </div>
          <div class="text-center">
            <button class="payment-btn" type="submit">
              Invia
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.payment-background,
.confirm-background {
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 80vh;
}
.payment-background{
  background-image: url("img/payment-background.jpg");
  background-position: start;
}
.confirm-background{
  background-image: url("img/confirm-background.jpg");
  background-position: center;
}

.payment-container,
.confirm-container{
  background-color: rgba($color: #000, $alpha: 0.7);
  width: 100%;
  min-width: 540px;
  height: 100%;
  min-height: 80vh;
  padding-top: 8rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  align-items: center;
}
.form_label{
    display: block;
    text-align: center;
    color: #dadada;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.25rem;
}
.input-form{
    background-color: #aa9709;
    border-radius: 5px;
    color: #222;
    font-weight: 600;
    padding: 7px 10px;
    border: none;
    display: block;
    width: 100%;
}
.error-message{
  background: linear-gradient(
  to bottom,
  rgba(34, 34, 34, 0) 0%,
  rgba(34, 34, 34, 0.6) 20%,
  rgba(34, 34, 34, 0.9) 50%,
  rgba(34, 34, 34, 0.6) 80%,
  rgba(34, 34, 34, 0) 100%
);

  width: 51%;
  margin: 0 auto;
  padding: 5px 0;
  color: #aa9709;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
  font-size: .9rem;
}
.payment-btn{
    background-color: #dadada;
    border-radius: 10px;
    color:#aa9709; ;
    font-weight: 600;
    padding: 5px 10px;
    border: none;
}
.payment-btn:hover{
  transform: scale(1.05);
  transition: 0.3s linear;
  background-color: rgba($color: #aa9709, $alpha: 0.8);
  color: #dadada;
  box-shadow: 1px 1px 8px 2px #dadada !important;
}
.text-center{
    text-align: center;
    margin-top: 1.5rem;
}

.success-title{
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0) 100%);
  padding: 0.5rem;
  font-size: 2rem;
  color: #d7d3d3;
}
.success-subtitle{
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0) 100%);
  padding: 0.5rem;
  font-size: 1.15rem;
  color: #d7d3d3;
  display: inline-block;
}
.logo-a{
  width: 60px;
}
.logo-b{
  color: #dadada;
  font-weight: 800;
  font-size: 1.5rem;
  padding-left: 10px;
}

</style>
