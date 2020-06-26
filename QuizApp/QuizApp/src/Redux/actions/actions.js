import { SET_QUIZ,SELECTED_SUBJECT, SET_ANSWER, SET_SUBJECT , LOADING, ERROR} from './actionTypes';
// import AsyncStorage from '@react-native-community/async-storage';
import server from '../../config/config'

export const setQuiz = quiz => ({
    type: SET_QUIZ,
    data:quiz
});
export const setSubject = subject => ({
    type: SET_SUBJECT,
    data:subject
});

export const setSelectedSubject = subject =>({
    type: SELECTED_SUBJECT,
    data:subject
})

// export const setSub = () => ({
//     type: REMOVE_TOKEN,
// });

export const loading = bool => ({
    type:  LOADING,
    data: bool,
});

export const error = error => ({
    type: ERROR,
    data:error,
});
// export const postSignup = data => ({
//     type: POST_SIGNUP,
//     data:data,
// });



// export const deleteFood = (key) => (
//   {
//     type: DELETE_FOOD,
//     key: key
//   }
// );
// export const getUserScore = () => dispatch => 

//  AsyncStorage.getItem('score')
//         .then((data) => {
//             dispatch(loading(false));
//             dispatch(getToken(data));
//         })
//         .catch((err) => {
//             dispatch(loading(false));
//             dispatch(error(err.message || 'ERROR'));
//         })



// export const setUserscore = (data) => dispatch =>
//     AsyncStorage.setItem('token', data)
//         .then((data) => {
//             dispatch(loading(false));
//             dispatch(setToken(data));
//         })
//         .catch((err) => {
//             dispatch(loading(false));
//             dispatch(error(err.message || 'ERROR'));
//         })

// export const removeUserToken = () => dispatch =>
//     AsyncStorage.removeItem('token')
//         .then((data) => {
//             dispatch(loading(false));
//             dispatch(removeToken(data));
//         })
//         .catch((err) => {
//             dispatch(loading(false));
//             dispatch(error(err.message || 'ERROR'));
//         })

export const getQuiz =(data)=>dispatch=>{
    console.log('---------in get quizes ---------')
    console.log(data)
    dispatch(loading(true))
    fetch(server.backend+'quiz/find/'+data,{
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        }
    })
    .then((response) => response.json())
    .then((json) => {
        console.log('---response')
        console.log(json)
        console.log(json.quiz)
        // dispatch(loading(false))
        dispatch(setQuiz(json.quiz));
        // dispatch(getHeading())

    })
    .catch((error) => {
      console.error(error);
    });
}
export const getSubject =()=>dispatch=>{
    console.log('---------in get subject ---------')

    dispatch(loading(true))
    fetch(server.backend+'quiz/subject',{
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        }
    })
    .then((response) => response.json())
    .then((json) => {
        console.log('---response')
        console.log(json)
        console.log(json.subject)
        // dispatch(loading(false))
        dispatch(setSubject(json.subject));
        // dispatch(getHeading())

    })
    .catch((error) => {
      console.error(error);
    });
}
