import {Product_List, Search_Product} from './actionType';

export const productList = () => {
  return {
    type: Product_List,
  };
};
export const searchProduct = (query) => {
  console.log('query',query);
  return {
    type: Search_Product,
    query
  };
};