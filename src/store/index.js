import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    cartTotal: 0,
    selectedRestaurantId: null,
  },
  mutations: {
    async initialiseStore(state) {
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
      }
      if (localStorage.getItem("cartTotal")) {
        state.cartTotal = parseFloat(localStorage.getItem("cartTotal"));
      }
      if (localStorage.getItem("selectedRestaurantId")) {
        state.selectedRestaurantId = parseInt(
          localStorage.getItem("selectedRestaurantId")
        );
      }
      return true;
    },
    addRemoveCart(state, payload) {
      // Add or remove item
      payload.plate.restaurantId = state.selectedRestaurantId;
      payload.toAdd
        ? state.cart.push(payload.plate)
        : (state.cart = state.cart.filter(
            (obj) => obj.id !== payload.plate.id
          ));

      // Calculating the total
      state.cartTotal = state.cart.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      }, 0);

      // Saving in web storage
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCart(state, payload) {
      // Update quantity
      const itemToUpdate = state.cart.find((o) => o.id === payload.plate.id);
      if (itemToUpdate) {
        itemToUpdate.qty = payload.plate.qty;
      }

      // Calculating the total
      state.cartTotal = state.cart.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      }, 0);

      // Saving in web storage
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    selectRestaurant(state, restaurantId) {
      state.selectedRestaurantId = restaurantId;
      localStorage.setItem("selectedRestaurantId", restaurantId);
    },
  },
  actions: {},
  modules: {},
});
