import { reactive } from "vue";

export const store = reactive({
  api: {
    baseUrl: 'http://127.0.0.1:8000/api/',

    //Uso "http://localhost:8000/api/" per vedere le img
    // Altrimenti uso http://127.0.0.1:8000/api/
  },
});
