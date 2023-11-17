import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
export const GetSpecificStudent = () => {
  const [regno, setRegno] = useState("");
  const [student, setStudent] = useState({ name: "", regno: "" });
  const navigate = useNavigate();
  let submit = false;
  const goBackHome = () => {
    navigate("/");
  };

  const fetchData = () => {
    if (submit === true && regno !== "") {
      axios
        .get("http://localhost:5000/getspecificstudent", {
          params: { reg_num: regno },
        })
        .then((response) => {
          console.log("Specific student data received", response.data);
          const { name, reg_num } = response.data;
          setStudent({ name, regno: reg_num });
          alert("Student found !");
        })
        .catch((error) => {
          console.error("Error fetching data", error);
          setStudent({ name: "", regno: "" });
          submit = false;
        });
    }
  };

  useEffect(() => {
    fetchData(); // Trigger the fetch when regno changes
  }, [regno]);

  const onSubmit = (e) => {
    e.preventDefault();
    submit = true;
    fetchData(); // Trigger the fetch on form submit
    setRegno("");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setRegno(e.target.value);
  };
  return (
    <>
      <div
        style={{
          width: "100%", // Set width to occupy full width of the parent container
          height: "100vh", // Set height to occupy the full viewport height
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content vertically
        }}
      >
        <div>
          <h2>Get Specific Student's Details</h2>
          <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Register Number</label>
            <br></br>
            <input
              onChange={handleChange}
              placeholder="Enter Register number"
              style={{ width: "200px" }}
              name="regno"
              value={regno}
            />
            <br></br>
            <div style={{ display: "flex" }}>
              <button
                style={{ width: "80px", height: "35px", borderRadius: "5px" }}
              >
                Submit
              </button>
              <Button
                onClick={goBackHome}
                style={{ marginLeft: "10px" }}
                variant="info"
              >
                Go Back Home
              </Button>{" "}
            </div>
          </form>
        </div>
        <div style={{margin:"20px"}}>
          {console.log(student.name)}
          {student.name !== "" && student.regno !== "" && (
            <div style={{ display: "flex",
            flexDirection: "column",
            alignItems: "left"}}>
              <h2>Student details</h2>
              <p style={{textAlign:"justify"}}>
                Name: {student.name}<br></br>Registration Number: {student.regno}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
