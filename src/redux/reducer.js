import {
  Add_To_Cart,
  Buy_Now,
  Empty,
  Remove_Item,
  Remove_To_Cart,
} from './actionType';

const initialState = [];

export const cartData = (state = initialState, action) => {
  
  switch (action.type) {
    case Add_To_Cart:
      return [action.data, ...state];
    case Remove_To_Cart:
      //console.log('remove cart',action)
      //state.length = state.length  ?  state.length - 1 : []
      const remainingItem = state.filter(item => item.id !== action.data);
      return [...remainingItem];
    case Empty:
      state = [];
      return [...state];
    case Remove_Item:
      //console.log('buy',action)
      const newData = state.filter((item, index) => index !== action.data);
      return [...newData];
    default:
      return state;
  }
};
