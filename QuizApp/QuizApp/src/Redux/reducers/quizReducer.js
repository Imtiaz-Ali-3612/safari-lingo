import { combineReducers } from 'redux';
import { SET_QUIZ, LOADING,SELECTED_SUBJECT, ERROR} from '../actions/actionTypes';

const quizReducer = (state = {
    quiz: {},
    subject:'',
    loading: false,
    error: null,
}, action) => {
    switch (action.type) {
        case SET_QUIZ:
            return { ...state, quiz: action.data };
        case LOADING:
            return { ...state, loading: action.data ,loading:false};
        case ERROR:
            return { ...state, error: action.data };
        case SELECTED_SUBJECT:
            return { ...state, subject:action.data}
        default:
            return state;
    }
};


export default quizReducer;
// export default combineReducers({
//     token: rootReducer
// });
