import { legacy_createStore, applyMiddleware, compose } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import makeRootReducer from './reducers/combinedReducers';
import thunk from "redux-thunk";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
    stateReconciler: hardSet
}

const persistingReducer = persistReducer<ReturnType<typeof makeRootReducer>>(persistConfig, makeRootReducer);

const store = (initialState = undefined) => {

    const middleware = [thunk];

    const enhancers : any = [];

    const store = legacy_createStore(
        persistingReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
    return store;
};

export default store