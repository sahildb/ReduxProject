import {Add_To_Cart, Buy_Now, Empty, Remove_Item, Remove_To_Cart} from './actionType';

export const addToCart = data => {
  return {
    type: Add_To_Cart,
    data,
  };
};

export const removeFromCart = data => {
  return {
    type: Remove_To_Cart,
    data,
  };
};

export const empty = () => {
  console.log('empty');
  return {
    type: Empty,
  };
};

export const remove_Item = data => {

  return {
    type: Remove_Item,
    data
  };
};

