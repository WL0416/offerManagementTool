import React, { Component } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import "../../App.css";
import axios from "axios";

class NewOffer extends Component {
  state = {
    // the list of courses which is used to dynamicly add
    courseList: [{ name: "", intake: "", period: "" }],
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

  constructor(props) {
    super(props);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.getoffer = this.getoffer.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  addCourse = () => {
    this.setState(preState => ({
      courseList: [...preState.courseList, { name: "", intake: "", period: "" }]
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

  async getoffer() {
    try {
      const response = await axios.get("http://192.168.1.5:8000/offer/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  getOfferLetter() {
    axios
      .post("http://192.168.1.5:8000/generateoffer/", this.state)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getOfferLetter();
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleCourseChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.id;

    const idx = parseInt(id.slice(6));

    let courseList = this.state.courseList.slice();

    courseList[idx][name] = value;

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
                onChange={this.handleChange}
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
                value={this.state.phone}
                onChange={this.handleChange}
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
              periodId = `period${idx}`;
            return (
              <Form.Row key={idx}>
                <Form.Group as={Col}>
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    as="select"
                    name="name"
                    id={courseId}
                    onChange={this.handleCourseChange}
                  >
                    <option style={{ display: "none" }}>
                      -- select an option --
                    </option>
                    {allcourses.map((c, idx) => (
                      <option value={c} key={idx}>
                        {c}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Intake Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Birthday"
                    name="intake"
                    id={intakeId}
                    onChange={this.handleCourseChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="weeks"
                    name="period"
                    id={periodId}
                    onChange={this.handleCourseChange}
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
