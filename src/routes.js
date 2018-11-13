// import React from 'react';
// import  { Route, IndexRoute } from 'react-router';
// import App from './App';
// import HomePage from './home/HomePage';
// import AboutPage from './about/AboutPage';
// import CoursePage from './course/CoursePage';
// export default 
// (
// <Route path="/" component={App}>
// <Route path="home" component={HomePage}/>
// <Route path="about" component={AboutPage}/>
// <Route path="course" component={CoursePage}/>
// </Route>

// );
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursePage';
import AboutPage from './components/about/AboutPage';

import ManageCoursePage from './components/course/ManageCoursePage';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" name="courses" component={CoursesPage}/>
    <Route path="about" name="about" component={AboutPage}/>
    <Route path="course" name="ManageCoursePage" component={ManageCoursePage}/>
    <Route path="course/:id" name="ManageCoursePage" component={ManageCoursePage}/>
  </Route>
);