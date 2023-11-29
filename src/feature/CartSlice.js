import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
    cart: [],
    items: ProductData,
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1;
            } else {
                const temp = { ...action.payload, quantity: 1 };
                state.cart.push(temp);
            }
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, Item) => {
                    const { price, quantity } = Item;
                    const itemTotal = price * quantity;

                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.cartTotalAmount = parseInt(totalPrice.toFixed(2));
            state.cartTotalQuantity = totalQuantity;
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        increaseItemQty: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
        },

        decreaseItemQty: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
        }

    },
});

export const { addToCart, getCartTotal, removeItem, increaseItemQty, decreaseItemQty } = cartSlice.actions;

// export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
// export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default cartSlice;

