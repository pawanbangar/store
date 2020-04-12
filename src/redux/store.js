import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middleWares=[logger];
middleWares.push(thunk);
export const store=createStore(rootReducer,applyMiddleware(...middleWares));
export const persistor=persistStore(store);
export default {store,persistor};