import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const StudentForm = () => {
  const navigate = useNavigate();
  //define state variable
  const [studentState, setStudentState] = useState({
    name: "",
    regno: "",
  });
  const goBackHome = ()=>{
    navigate("/");
  }

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
      alert("Student added successfully !");
      window.location.reload();
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };
  return (
    <>
      <div
    style={{
      width: "100%", // Set width to occupy full width of the parent container
      height: "100vh", // Set height to occupy the full viewport height
      display: "flex",
      flexDirection:"column",
      alignItems: "center", // Center content vertically
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
          <Button
            onClick={goBackHome}
            style={{ margin: "10px" }}
            variant="info"
          >
          Go Back Home
          </Button>{" "}
        </Form>
      </div>
    </>
  );
};
