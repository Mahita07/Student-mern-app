import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
export const StudentForm = () => {
  //define state variable
  const [studentState, setStudentState] = useState({
    name: "",
    regno: "",
  });

  //handle change of text in form fields
  const handleChange = (e) => {
    console.log(studentState);
    const { name, value } = e.target;
    setStudentState((studentState) => ({ ...studentState, [name]: value }));
  };

  //handle actions after form submission
  const onSubmit = async(e) => {
    e.preventDefault();
    console.log(studentState.name,studentState.regno);
    try {
      const response = await axios.post('http://localhost:5000/createstudent', {
        name: studentState.name,
        reg_num: studentState.regno
      });

      console.log('Student created:', response.data);
      setStudentState({
        name: "",
        regno: "",
      });
      window.location.reload();
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };
  return (
    <>
      <div
        style={{
          width: "600px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Create New Student Profile !</h2>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={studentState.name}
              onChange={handleChange}
              placeholder="Enter Name"
              style={{width:"200px"}}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRegno">
            <Form.Label>Register Number</Form.Label>
            <Form.Control
              name="regno"
              value={studentState.regno}
              onChange={handleChange}
              placeholder="Enter Register Number"
              style={{width:"200px"}}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
