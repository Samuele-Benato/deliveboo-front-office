<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Io sono il form degli ordini",
      formData: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
      },
    };
  },

  methods: {
    inviaOrdine() {
      if (this.isFormValid()) {
        axios
          .post("URL_DEL_TUO_BACKEND", this.formData)
          .then((response) => {
            // Gestisci la risposta del backend
            console.log("Risposta dal backend:", response.data);
          })
          .catch((error) => {
            // Gestisci eventuali errori di comunicazione
            console.error("Errore durante la richiesta:", error);
          });
      } else {
        console.log("Il form contiene errori, non può essere inviato.");
      }
    },

    isFieldEmpty(fieldValue) {
      return fieldValue.trim() === ""; // Verifica se il campo è vuoto
    },

    isFormValid() {
      return Object.values(this.formData).every(
        (fieldValue) => !this.isFieldEmpty(fieldValue)
      );
    },
  },
};
</script>

<template>
  <div class="wrapper-form">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="row my-5">
        <form @submit.prevent="inviaOrdine">
          <div class="mb-3">
            <label for="name" class="form-label">Nome:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="formData.name"
              required
            />
            <small v-if="isFieldEmpty(formData.name)" class="text-danger"
              >Il campo Nome è obbligatorio</small
            >
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
            <small v-if="isFieldEmpty(formData.lastname)" class="text-danger"
              >Il campo Cognome è obbligatorio</small
            >
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
            <small v-if="isFieldEmpty(formData.email)" class="text-danger"
              >Il campo Email è obbligatorio</small
            >
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
            <small v-if="isFieldEmpty(formData.phone)" class="text-danger"
              >Il campo Telefono è obbligatorio</small
            >
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
            <small v-if="isFieldEmpty(formData.address)" class="text-danger"
              >Il campo Indirizzo è obbligatorio</small
            >
          </div>
          <div>
            <button type="submit" class="btn btn-primary">Invia</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-form {
  margin-top: 100px;
}
</style>
