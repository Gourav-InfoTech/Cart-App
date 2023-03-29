import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    showCart: false
  },
  reducers: {

    addToCart: (state: any, action) => {
      const itemInCart = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    quantityIncrease: (state: any, action) => {
      state.cart.map((el: any) => {
        if (el.id === action.payload) {
         return el.quantity++
        }
      })
    },

    quantityDecrease: (state: any, action) => {
      state.cart.map((el: any) => {
        if (el.id === action.payload && el.quantity > 1) {
          return el.quantity--
        } else if (el.quantity === 1) {
          return el.quantity = 1
        }
      })
    },

    removeFromCart: (state: any, action) => {
      state.cart = state.cart.filter((el: any) => el.id !== action.payload);
    },

    toggleCart: (state:any, action)=>{
      console.log("showCart",state.showCart);
      
      state.showCart = !state.showCart
    },
    closeCart: (state:any,action)=>{
      state.showCart = false
    }
  },
});

export const { addToCart, removeFromCart, quantityIncrease, quantityDecrease,toggleCart,closeCart } =
  cartSlice.actions;
export default cartSlice;
