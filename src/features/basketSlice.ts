import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../model/product";
import { storeData } from "../fakeData";

interface BasketState {
  products: Product[];
  amount: number;
  total: number;
}

const initialState: BasketState = {
  products: storeData,
  amount: 0,
  total: 0.0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    incrementAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name == payload.name);
      item!.amount++;
    },
    decrementAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name == payload.name);
      item!.amount--;
    },
    updateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { incrementAmount, decrementAmount, updateTotal } =
  basketSlice.actions;

export default basketSlice.reducer;
