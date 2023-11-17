import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate=useNavigate();
  const handleRoutes = (e) => {
  const action = e.target.name;
  navigate(`/${action}`);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Welcome to Student Portal</h2>
        <h6>Choose one of the below options to continue</h6>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            name="getAllStudents"
            onClick={handleRoutes}
            style={{ margin: "10px" }}
            variant="info"
          >
            View Student Details
          </Button>{" "}
          <Button
            name="createStudent"
            onClick={handleRoutes}
            style={{ margin: "10px" }}
            variant="secondary"
          >
            Create New Student Profile
          </Button>{" "}
          <Button
            name="getSpecificStudent"
            onClick={handleRoutes}
            style={{ margin: "10px" }}
            variant="success"
          >
            Search Student
          </Button>{" "}
          <Button
            name="deleteStudent"
            onClick={handleRoutes}
            style={{ margin: "10px" }}
            variant="danger"
          >
            Delete Student Profile
          </Button>{" "}
          <Button
            name="updateStudent"
            onClick={handleRoutes}
            style={{ margin: "10px" }}
            variant="dark"
          >
            Update Student Profile
          </Button>{" "}
        </div>
      </div>
    </>
  );
};
