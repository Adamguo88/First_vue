import { ADD_COUNT, ADD_TO_CART } from "./mutation-types";

export default {
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    payload.count += 1;
    state.cartList.push(payload);
    // console.log(oldproduct);
  }
};
