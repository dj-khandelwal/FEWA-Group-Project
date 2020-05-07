import React from "react";
import ReactDOM from "react-dom";
import firebase from './firebase.js';


class CourseItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <p>{this.props.courseName} |  {this.props.courseID} </p>
                {this.props.courseDescription}
            </li>
        );
    }
}

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseID: "",
            courseName: "",
            courseDescription: "",
            history: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const courseRef = firebase.database().ref('courses');
        const course = {
            courseID: this.state.courseID,
            courseName: this.state.courseName,
            courseDescription: this.state.courseDescription,
        }

        courseRef.child(this.state.courseID).set(course);
        this.setState({
            courseID: "",
            courseDescription: "",
            courseName: ""
        });
    }


    componentDidMount() {
        const courseRef = firebase.database().ref('courses');
        courseRef.on('value', (snapshot) => {
            let courses = snapshot.val();
            let newHistory = [];

            for(let course in courses) {
                newHistory.push({
                    courseID: courses[course].courseID,
                    courseDescription: courses[course].courseDescription,
                    courseName: courses[course].courseName,
                });
            }

            this.setState({
                history: newHistory
            })
        })
    }

    render() {
        const courseItems = this.state.history.map((course) =>
            <CourseItem key = {course.courseID}
                        courseID = {course.courseID}
                        courseDescription = {course.courseDescription}
                        courseName = {course.courseName}
            />
        );

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        The course name is:
                        <input
                            name="courseName"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.courseName}/>
                    </label>
                    <br />

                    <label>
                        The course ID is:
                        <input
                            name="courseID"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.courseID}/>
                    </label>
                    <br />
                    <label>
                        The course description is:
                        <input
                            name="courseDescription"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.courseDescription}/>
                    </label>
                    <br />

                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <ul>
                        {courseItems}
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Course />,
    document.getElementById('root')
);
