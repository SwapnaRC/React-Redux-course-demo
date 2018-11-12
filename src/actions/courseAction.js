import courseApi from '../api/mockCourseApi';
import * as types from './actionTypes';
export function loadCoursesSuccess(courses){
    // debugger;
    return{type:types.LOAD_COURSE_SUCCESS,courses};
}
//thunk is usng here to handle ascync calls like ajax and others
export function loadCourses(){
return function(dispatch){
    return courseApi.getAllCourses().then(courses =>{
        dispatch(loadCoursesSuccess(courses));
    }).catch(error =>{
        throw(error);
    });
};
}