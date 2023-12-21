import { reactive } from "vue";

export const store = reactive({
  api: {
    baseUrl: "http://localhost:8000/api/",

    //Uso "http://localhost:8000/api/" per vedere le img
    // Altrimenti uso http://127.0.0.1:8000/api/
  },
});

/* Braintree
Merchant ID: f6pwj356c2x9qys4
Public Key: tvy79vwq865xj7kt
Private Key: 3ba1075b10a509d8f5b414241eb779dc
*/
