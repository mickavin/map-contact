import { combineReducers } from "redux";
import contactReducer from './contactReducer';


export const makeRootReducer = () => {
      return combineReducers({
      contacts: contactReducer,
      });
}

export default makeRootReducer()