import { ADD_COUNT, ADD_TO_CART } from "./mutation-types";

export default {
  addCart(context, payload) {
    let oldproduct = context.state.cartList.find(item => item.iid === payload.iid);
    if (oldproduct) {
      context.commit(ADD_COUNT, oldproduct);
      // 因為API的關係 所以只能自行測試 如果買了兩次iid = 1 的話 第二的的iid = 4 表示我的數據模擬成功
      // if (oldproduct.iid === "1") oldproduct.iid = 4; oldproduct.count += 1;
    } else {
      context.commit(ADD_TO_CART, payload);
    }
  }
};
