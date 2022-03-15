import { LOAD_DATA } from "../constant/enum";
import Products from '../data/products.json';

const initialState = {
    items : Products
}

const productReducers = (state : any = initialState, action: any) => {
  switch (action.type) {
    case LOAD_DATA:
      state = [...state];
      return state;
    default:
      return state;
  }
};
 
export default productReducers