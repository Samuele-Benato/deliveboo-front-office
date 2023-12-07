<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  name: "CartAddRemove",
  props: ["plate"],
  data() {
    return {
      qty: 1,
      loading: false,
    };
  },
  methods: {
    async addOrRemove(number) {
      this.loading = true;
      if (number == 1) {
        if (this.qty < 10) {
          this.qty++;
          this.plate.qty = this.qty;
          await this.$store.commit("updateCart", { plate: this.plate });
          toast.success("Carrello aggiornato", {
            autoClose: 1000,
          });
        } else {
          toast.warning("Hai raggiunto il limite", {
            autoClose: 3000,
          });
        }
      }
      if (number == -1) {
        if (this.qty > 1) {
          this.qty--;
          this.plate.qty = this.qty;
          await this.$store.commit("updateCart", { plate: this.plate });
          toast.success("Carrello aggiornato", {
            autoClose: 1000,
          });
        } else {
          toast.warning("Hai raggiunto il limite", {
            autoClose: 3000,
          });
        }
      }
      this.loading = false;
    },
  },
  mounted() {
    this.qty = this.plate.qty;
  },
};
</script>

<template>
  <div v-if="plate" class="input-group plus-minus justify-content-center">
    <button
      class="btn-add-remove"
      :class="loading ? 'disabled' : ''"
      @click="addOrRemove(-1)"
      type="button"
      id="button-addon1"
    >
      -
    </button>
    <input
      type="number"
      v-model="qty"
      disabled
      class="number-add-remove "
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
    <button
      class="btn-add-remove"
      :class="loading ? 'disabled' : ''"
      @click="addOrRemove(1)"
      type="button"
      id="button-addon1"
    >
      +
    </button>
  </div>
</template>

<style>
.plus-minus input {
  max-width: 50px;
}
.btn-add-remove{
  border-radius: 5px;
  padding: .25rem .75rem;
  background-color: #222;
  opacity: .8;
  color: #bababa;
}
.number-add-remove{
  background-color: #bababa;
  opacity: .8;
  color: #222;
  text-align: center;
  padding-left: .75rem;
  margin: 0; 
}
</style>
