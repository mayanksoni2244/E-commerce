import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  cartSlice  from "../cart/cartSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


export const rootReducer = combineReducers({
    cart:cartSlice,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:false
        }),
});
const persistor=persistStore(store)

export {store,persistor};
export default store

