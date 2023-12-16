import { createStore } from "redux";
import rootReducer from './reducers/cartReducer.js'

const store = createStore(rootReducer);

export default store;