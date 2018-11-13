import courseApi from '../api/mockCourseApi';
import * as types from './actionTypes';

export function loadCoursesSuccess(courses){
    // debugger;
    return{type:types.LOAD_COURSE_SUCCESS,courses};
}
export function createCourseSuccess(course){
   
    return{type: types.CREATE_COURSE_SUCCESS,course};
}
export function updateCourseSuccess(course){
 

    return{type:types.UPDATE_COURSE_SUCCESS,course};
}
//thunk is usng here to handle ascync calls like ajax and others

export function loadCourses() {
    return function (dispatch) {
    
      return courseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch(error => {
        throw(error);
      });
    };
  }
  
  export function saveCourse(course) {
      alert("hello action");
    return function (dispatch, getState) {
 
      return courseApi.saveCourse(course).then(course => {
        course.id ? dispatch(updateCourseSuccess(course)) : 
        dispatch(createCourseSuccess(course));
      }).catch(error => {
     
        throw(error);
      });
    };
  }