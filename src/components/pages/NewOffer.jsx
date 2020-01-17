import React, { Component } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import "../../App.css";
import axios from "axios";

class NewOffer extends Component {
  state = {
    // the list of courses which is used to dynamicly add
    courseList: [{ course0: "", intake0: "", duration0: "" }],
    first_name: "",
    last_name: "",
    birthday: "",
    passport: "",
    phone: "",
    email: "",
    address: "",
    enrolfee: "",
    materialfee: ""
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  addCourse = () => {
    this.setState(preState => ({
      courseList: [
        ...preState.courseList,
        { course: "", intake: "", duration: "" }
      ]
    }));
  };

  removeCourse = () => {
    let courses = [...this.state.courseList];
    const max_index = courses.length - 1;
    if (courses.length > 1) {
      courses.splice(max_index, 1);
      this.setState(() => ({
        courseList: courses
      }));
    }
  };

  handleSubmit = event => {
    alert(
      "data was submitted " +
        this.state.first_name +
        " " +
        this.state.last_name +
        " " +
        this.state.email +
        " " +
        this.state.courseList[0].course0 +
        " " +
        this.state.enrolfee +
        " " +
        this.state.materialfee
    );
    event.preventDefault();
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleCourseChange = (event, idx) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name, value);

    let courseList = this.state.courseList.slice();

    courseList[idx].name = value;

    this.setState({
      courseList: courseList
    });
  };

  render() {
    const { college, allcourses } = this.props;
    let { courseList } = this.state;

    let deleteDisable = true;
    if (courseList.length > 1) {
      deleteDisable = false;
    }

    return (
      <Container className="application">
        <br />
        <h1>New Offer ({college})</h1>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridBirthday">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Birthday"
                name="birthday"
                value={this.state.birthday}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassport">
              <Form.Label>Passport No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Passport Number"
                name="passport"
                value={this.state.passport}
                onChnage={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                name="phone"
                value={this.state.passport}
                onChnage={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Type in address here"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* add courses or delete courses */}
          <Button
            variant="success"
            onClick={this.addCourse}
            className="btn-space"
          >
            Add Course
          </Button>
          <Button
            variant="danger"
            onClick={this.removeCourse}
            className="btn-space"
            disabled={deleteDisable}
          >
            Remove Course
          </Button>

          {courseList.map((val, idx) => {
            let courseId = `course${idx}`,
              intakeId = `intake${idx}`,
              durationId = `duration${idx}`;
            return (
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCourse">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    as="select"
                    name={courseId}
                    // onChange={this.handleCourseChange(idx)}
                    value={this.state.courseList[idx].courseId}
                  >
                    {allcourses.map(c => (
                      <option value={c}>{c}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <p>{courseId}</p>
                <p>{val[intakeId]}</p>

                <Form.Group as={Col} controlId="formGridSart">
                  <Form.Label>Intake Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Birthday"
                    name={intakeId}
                    value={this.state.courseList[idx].intakeId}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDuration">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="weeks"
                    name={durationId}
                    value={this.state.courseList[idx].durationId}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
            );
          })}

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEnroll">
              <Form.Label>Enrollment Fee</Form.Label>
              <Form.Control
                type="text"
                placeholder="$"
                name="enrolfee"
                value={this.state.enrolfee}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMaterial">
              <Form.Label>Material Fee</Form.Label>
              <Form.Control
                type="text"
                placeholder="$"
                name="materialfee"
                value={this.state.materialfee}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit" size="lg">
            Generate
          </Button>
        </Form>
        <br />
        <br />
      </Container>
    );
  }
}

export default NewOffer;
