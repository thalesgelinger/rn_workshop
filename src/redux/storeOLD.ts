import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';

export const storeOLD = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof storeOLD.getState>;
export type AppDispatch = typeof storeOLD.dispatch;
