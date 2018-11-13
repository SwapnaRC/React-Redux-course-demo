import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseAction";
import CourseForm from "./CourseForm";
class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({},props.course),
      errors:{}
    };
    this.updateCourseState=this.updateCourseState.bind(this);
    this.saveCourse=this.saveCourse.bind(this);
  }
  updateCourseState(event){
    const field= event.target.name;
    let course=this.state.course;
    course[field]=event.target.value;
    return this.setState({course:course});
  }
  saveCourse(event){
    alert("Hello");
    event.preventDefault();
    console.log(this.state.course);
    this.props.actions.saveCourse(this.state.course);
  }
 

  render() {
    return (
      
        <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        errors={this.state.errors}
        course={this.state.course} 
        onSave={this.saveCourse}
        />
      
    );
  }
}
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let course={id:'',watchHref:'',title:'',authorId:'',length:'',category:''};
 const authorFormattedForDropdown =state.authors.map(author =>{
   return{
     value:author.id,
     text:author.firstName+' '+author.lastName
   };
 });
    return {
    course: course,
    authors:authorFormattedForDropdown
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
)(ManageCoursePage);
