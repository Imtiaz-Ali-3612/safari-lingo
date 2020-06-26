import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/reducers';

import { combineReducers } from 'redux';

var allReducers=combineReducers({
    token: rootReducer,
 
});

const middlewares = [ReduxThunk];

const store = createStore(
     allReducers,
    {},// default state of the application
    compose(applyMiddleware(...middlewares)),
);

export default store;