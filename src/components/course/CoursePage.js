import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseAction";
import CourseList from "./CourseList";
import { browserHistory } from "react-router";

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push("/course");
  }
  courseRow (course,index){
      return <div key={index}>{course.title}</div>;
  }
  render() {
    //   debugger;
    const { courses } = this.props;
    return (
      <div>
        <h1>Course</h1>
       
        <input
          type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />

        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  //dispatch:PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);
