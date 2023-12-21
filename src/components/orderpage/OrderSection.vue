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
  /* mounted: {
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    cartArray.forEach(element => {
    const quantity = element.count;
    const item_id = element.item_id;
    this.productsArray.push({ quantity, item_id }); //  salva le coppie chiavi valori che interessano
    });
},*/
  methods: {
    submitForm() {
      const itemTotal = this.calculateItemTotal;
      this.formData.total_orders = itemTotal;
      const itemCart = this.cartItems;
      this.formData.cart = itemCart;
      this.payWithCard();
      this.handlePayment();

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
    handlePayment() {
      // Validazione della lunghezza della carta di credito e del CVV
      if (!/^[a-zA-Z]+$/.test(this.owner)) {
        this.validationError =
          "Il nome del titolare deve contenere solo lettere";
        return;
      }
      if (this.creditCardNumber.length !== 16) {
        this.validationError =
          "Il numero della carta di credito deve essere di 16 cifre.";
        return;
      }
      if (this.expirationDate.length !== 7) {
        this.validationError = "La scadenza deve essere di 7 caratteri.";
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

    // RICHIESTA GET PER IL TOKEN BRAINTREE
    async initializeBraintree() {
      try {
        const resp = await axios.get("http://localhost:8000/api/generate");
        const token = resp.data.token;

        const client = await braintree.client.create({
          authorization: token,
        });

        // Resto del codice per la gestione del cliente Braintree
        const hostedFieldsInstance = await braintree.hostedFields.create({
          client,
          styles: {
            input: {
              "font-size": "14px",
              "font-family": "Open Sans",
            },
          },
          fields: {
            number: {
              selector: "#creditCardNumber",
              placeholder: "Inserisci numero carta",
            },
            cvv: {
              selector: "#cvv",
              placeholder: "Inserisci CVV",
            },
            expirationDate: {
              selector: "#expireDate",
              placeholder: "MM / AAAA",
            },
          },
        });

        this.braintreeHostedFields = hostedFieldsInstance;
      } catch (error) {
        // console.error("Error fetching or using the token:", error);
      }
    },
    // RICHIESTA AXIOS POST PER INVIARE I DATI AL BACK END
    payWithCard() {
      if (this.braintreeHostedFields) {
        this.payLoad = true;
        this.error = "";

        this.braintreeHostedFields.tokenize().then((payload) => {
          axios
            .post("http://localhost:8000/api/payment", {
              amount: Number(this.calculateItemTotal().toFixed(2)),
              token: payload.nonce,
            })
            .then((resp) => {
              console.log(resp);
              this.payLoad = false;
              this.clearCart();
              this.$router.push("/thankyou");
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    },
  },
  created() {
    this.initializeBraintree();
  },
};
</script>

<template>
  <div class="order-background">
    <div class="order-container">
      <div v-if="showCongratulations" class="confirm-background">
        <div class="confirm-container justify-content-center">
          <div class="text-center">
            <h1 class="success-title">
              Complimenti, hai completato il tuo ordine!
            </h1>
            <p class="success-subtitle">Arriveremo al più presto.</p>
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
          <div v-if="validationError" class="error-message">
            {{ validationError }}
          </div>
          <div class="col-lg-6 col-12">
            <label class="form_label" for="owner">Intestatario carta:</label>
            <input
              class="input-form"
              type="text"
              id="owner"
              v-model="owner"
              required
            />
          </div>
          <div class="col-lg-6 col-12">
            <label class="form_label" for="creditCardNumber"
              >Numero carta:</label
            >
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
            <input
              class="input-form"
              type="text"
              id="cvv"
              v-model="cvv"
              required
            />
          </div>
          <div class="text-center">
            <span class="total-price">
              Totale € {{ calculateItemTotal.toFixed(2) }}
            </span>

            <!-- Bottone di invio -->
            <div class="text-center">
              <button type="submit" class="btn btn-primary mt-4">
                Invia dati
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="orderCompleted" class="order-success-message mt-5">
        Complimenti, hai completato il tuo ordine! Controlla la tua email per
        effettuare il pagamento.
      </div>
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
