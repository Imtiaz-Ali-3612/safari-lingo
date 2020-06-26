import { combineReducers } from 'redux';
import { SET_QUIZ, LOADING,SELECTED_SUBJECT, ERROR,ADD_SCORE,NEXT_QUESTION, RESET_QUIZ} from '../actions/actionTypes';

const quizReducer = (state = {
    quiz: {},
    subject:'',
    loading: true,
    question:0,
    score:0,
    error: null,
}, action) => {
    switch (action.type) {
        case SET_QUIZ:
            return { ...state, quiz: action.data ,loading:false };
        case LOADING:
            return { ...state, loading: action.data};
        case ERROR:
            return { ...state, error: action.data };
        case SELECTED_SUBJECT:
            return { ...state, subject:action.data}
        case NEXT_QUESTION:
            return { ...state, question:state.question+1}
        case ADD_SCORE:
            return { ...state, score:state.score+1}
        case RESET_QUIZ:
            return { ...state, score:0,question:0}
        default:
            return state;
    }
};


export default quizReducer;
// export default combineReducers({
//     token: rootReducer
// });
