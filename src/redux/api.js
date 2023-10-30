import Axios from 'axios';

export const fetchApiData = async () => {
  try {
    const response = await Axios.get('http://localhost:3000/products');
    const result = response.data;
    console.log(result);
    return [result]
  } catch (err) {
    console.log(err);
  }
};
