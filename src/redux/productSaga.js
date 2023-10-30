import {call, put, takeEvery} from 'redux-saga/effects';
import {Product_List, Search_Product, Set_Product_List} from './actionType';
import { fetchApiData } from './api';

function* getProducts() {
  let data = yield fetch('http://localhost:3000/products');
  data = yield data.json();

  // let data = yield call (fetchApiData)
  // console.log('data',data);
  yield put({type: Set_Product_List,data});
}

function* searchProduct(data) {
  let result = yield fetch(`http://localhost:3000/products?q=${data.query}`);
  result = yield result.json();

  // let data = yield call (fetchApiData)
  // console.log('data',data);
  yield put({type: Set_Product_List,data:result});
}
function* productSaga() {
  yield takeEvery(Product_List, getProducts);
  yield takeEvery(Search_Product, searchProduct);
}

export default productSaga;
