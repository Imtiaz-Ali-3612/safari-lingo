import { SET_SUBJECT, LOADING, ERROR} from '../actions/actionTypes';

const subjectReducer = (state = {
    subject: {},
    loading: true,
    error: null,
}, action) => {
    switch (action.type) {
        case SET_SUBJECT:
            return { ...state, subject: action.data,loading:false };
        case LOADING:
            return { ...state, loading: action.data };
        case ERROR:
            return { ...state, error: action.data };
        default:
            return state;
    }
};


export default subjectReducer;
