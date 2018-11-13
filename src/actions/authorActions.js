// import AuthorApi from '../api/mockAuthorApi';


import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
export function loadAuthorsSuccess(authors){
    // debugger;
    return{type:types.LOAD_AUTHORS_SUCCESS,authors};
}
//thunk is usng here to handle ascync calls like ajax and others
export function loadAuthors(){
return function(dispatch){
    return AuthorApi.getAllAuthors().then(authors =>{
        dispatch(loadAuthorsSuccess(authors));
    }).catch(error =>{
        throw(error);
    });
};
}