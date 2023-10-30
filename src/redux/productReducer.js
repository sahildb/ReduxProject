import {Product_List, Set_Product_List} from './actionType';

const initialState = [];

// export const productData = (state = initialState, action) => {
//   switch (action.type) {
//     case Set_Product_List:
//       return {productSuccess:true, data:action.payload};
//     default:
//       return state;
//   }
// };
  

export const productData = (state = initialState, action) => {
  switch (action.type) {
    case Set_Product_List:
      return [...action.data];
    default:
      return state;
  }
};