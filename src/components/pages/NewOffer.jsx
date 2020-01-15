import React, { Component } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import "../../App.css";

class NewOffer extends Component {
  state = {
    // the list of courses which is used to dynamicly add
    courseList: [{ course: "", intake: "", duration: "" }]
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
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridBirthday">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="Birthday" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassport">
              <Form.Label>Passport No.</Form.Label>
              <Form.Control type="text" placeholder="Passport Number" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Type in address here" />
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
            return (
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCourse">
                  <Form.Label>Course</Form.Label>
                  <Form.Control as="select">
                    {allcourses.map(c => (
                      <option>{c}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSart">
                  <Form.Label>Intake Date</Form.Label>
                  <Form.Control type="date" placeholder="Birthday" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDuration">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control type="number" placeholder="weeks" />
                </Form.Group>
              </Form.Row>
            );
          })}

          <Form.Row>
            {/* <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Visa
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="onshore"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="offshore"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
            </fieldset> */}

            <Form.Group as={Col} controlId="formGridEnroll">
              <Form.Label>Enrollment Fee</Form.Label>
              <Form.Control type="text" placeholder="$" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMaterial">
              <Form.Label>Material Fee</Form.Label>
              <Form.Control type="text" placeholder="$" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit" block>
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
