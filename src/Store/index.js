import { createObjectCopy } from "../utils/CommonUtils";

export function storeStocks(state, action) {
  switch (action.type) {
    case "FETCHED":
      return { ...state, stocks: action.stocks, loading: 200 };
    case "FETCHING":
      return { ...state, loading: 300 };
    case "ADD_ITEM":
      return {
        ...state,
        cart: { ...state.cart, [action.cartItem.productId]: action.cartItem },
      };
    case "INCREMENT_CART_ITEM":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.productId]: {
            productId: action.productId,
            quantity: state.cart[action.productId].quantity + 1,
          },
        },
      };
    case "DECREMENT_CART_ITEM":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.productId]: {
            productId: action.productId,
            quantity: state.cart[action.productId].quantity - 1,
          },
        },
      };
    case "DELETE_CART_ITEM":
      const a = createObjectCopy(state.cart);
      delete a[action.productId];
      return { ...state, cart: a };
    default:
      return state;
  }
}
