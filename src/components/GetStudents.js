import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
export const GetStudents = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const goBackHome = ()=>{
      navigate("/");
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/getstudents")
      .then((response) => {
        console.log("Data received");
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  return (
    <div
    style={{
      width: "100%", // Set width to occupy full width of the parent container
      height: "100vh", // Set height to occupy the full viewport height
      display: "flex",
      flexDirection:"column",
      alignItems: "center", // Center content vertically
    }}
  >
      
      <div>
        {data.length > 0 && (
          <div>
          <h2>List of Students</h2>
          <br></br>
          <table>
            <thead>
              <tr style={{ border: '1px solid #ddd', padding: '8px' }}>
                <th style={{ width: '50%'}}>Name</th>
                <th style={{ width: '50%' }}>Registration Number</th>
              </tr>
            </thead>
            <tbody>
            {data.map((student) => (
      <tr key={student._id} style={{ border: '1px solid #ddd', padding: '8px' }}>
        <td >{student.name}</td>
        <td>{student.reg_num}</td>
      </tr>
    ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
      <Button
            onClick={goBackHome}
            style={{ margin: "10px" }}
            variant="info"
          >
          Go Back Home
          </Button>{" "}
    </div>
  );
};
