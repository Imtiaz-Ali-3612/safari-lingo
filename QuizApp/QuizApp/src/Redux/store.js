import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import subjectReducer from './reducers/subjectReducer';
import quizReducer from './reducers/quizReducer';
import { combineReducers } from 'redux';

var allReducers=combineReducers({
    subject: subjectReducer,
    quiz:quizReducer
});

const middlewares = [ReduxThunk];

const store = createStore(
     allReducers,
    {},// default state of the application
    compose(applyMiddleware(...middlewares)),
);

export default store;