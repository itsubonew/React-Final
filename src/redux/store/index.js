//import { createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer} from 'redux-persist'; 
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key:'root',
    storage
  }
  
const persistedReducer = persistReducer(persistConfig, expenseReducer)
export const store = createStore(persistedReducer);

const persistor = persistStore(store)


export default persistor;
