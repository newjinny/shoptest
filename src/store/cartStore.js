import { createSlice } from "@reduxjs/toolkit";
// import { cartData } from "./cartData";
let cartData = localStorage.getItem("cartData")
  ? JSON.parse(localStorage.getItem("cartData"))
  : [];
let cart = createSlice({
  name: "cart",
  initialState: cartData,
  reducers: {
    //장바구니에서 수량이 증가
    addCount(state, action) {
      let num = state.findIndex((item) => item.id === action.payload);
      state[num].count++;
      localStorage.setItem("cartData", JSON.stringify(state));
    },
    //장바구니에서 수량이 감소
    minusCount(state, action) {
      let num = state.findIndex((item) => item.id === action.payload);
      state[num].count--;
      localStorage.setItem("cartData", JSON.stringify(state));
    },

    //장바구니의 아이템 삭제하기
    delItem(state, action) {
      let num = state.findIndex((item) => item.id === action.payload);
      state.splice(num, 1);
      localStorage.setItem("cartData", JSON.stringify(state));
    },

    //장바구니 아이템 추가하기
    addItem(state, action) {
      let num = state.findIndex((item) => item.id === action.payload.id);
      if (num === -1) state.push(action.payload);
      if (num !== -1) state[num].count += action.payload.count;
      localStorage.setItem("cartData", JSON.stringify(state));
    },
  },
});

export const { addCount, minusCount, delItem, addItem } = cart.actions;
export default cart;
