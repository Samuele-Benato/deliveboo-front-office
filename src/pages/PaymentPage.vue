<script>
import axios from "axios";
import { store } from "../data/store";
import { router } from "../router/index";
import braintree from "braintree-web";

export default {
  data() {
    return {
      title: "Pagamento",
      braintreeClient: null,
      hostedFields: null,
      total: 0,
    };
  },

  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    },
  },

  mounted() {
    this.setupPayment();
  },

  methods: {
    async setupPayment() {
      try {
        // Elimina i campi Hosted Fields precedenti, se presenti
        if (this.hostedFields) {
          this.hostedFields.teardown();
        }

        const response = await axios.get(store.api.baseUrl + "generate");
        const clientToken = response.data.token;

        this.braintreeClient = await braintree.client.create({
          authorization: clientToken,
        });

        // Inizializza i campi per l'input della carta
        const hostedFieldsInstance = await braintree.hostedFields.create({
          client: this.braintreeClient,
          fields: {
            number: {
              selector: "#card-number",
              placeholder: "Inserisci numero carta",
            },
            expirationDate: {
              selector: "#expiration-date",
              placeholder: "MM / YY",
            },
            cvv: {
              selector: "#cvv",
              placeholder: "CVV",
            },
          },
        });

        this.hostedFields = hostedFieldsInstance;

        //this.hostedFields.on("cardTypeChange", (event) => {
        //  const cardType = event.cards[0].type;
        //  this.cardTypeImage = `../../public/img/card-images/${cardType}.png`;
        //});
      } catch (error) {
        console.error("Errore durante l'inizializzazione di Braintree:", error);
      }
    },

    async handlePayment() {
      this.total = this.cartTotal;

      try {
        const { nonce } = await this.hostedFields.tokenize();

        // Invia il nonce alla tua API per elaborare il pagamento
        const response = await axios.post(store.api.baseUrl + "payment", {
          amount: this.total,
          token: nonce,
        });

        console.log("Risposta pagamento: positiva", response.data);
        // svuoto il carrello e il localStorage se il pagamento è stato effettuato
        // this.store.cart = [];
        // localStorage.removeItem("cartItems");
        // elimino i precedenti campi di hostedFields
        this.hostedFields.teardown();
        // vado alla rotta di ringraziamento
        router.push({ name: "thanks" });
      } catch (error) {
        console.error("Errore durante il pagamento:", error);
      }
    },
  },
};
</script>

<template>
  <div class="wrapper-payment">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="row flex-column-reverse align-items-center flex-lg-row">
        <div class="col-12">
          <form
            class="ms-auto row my-2 width-50"
            @submit.prevent="handlePayment"
          >
            <div class="form-group my-3">
              <label for="card-number">Cart Number</label>
              <div id="card-number"></div>
            </div>

            <div class="form-group my-3">
              <label for="expiration-date">Exipiration Date</label>
              <div id="expiration-date"></div>
            </div>

            <div class="form-group my-3">
              <label for="cvv">CVV</label>
              <div id="cvv"></div>
            </div>

            <div class="text-center">
              <button type="submit" class="button-pay">Pay</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
