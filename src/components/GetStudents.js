import React, { useEffect, useState } from "react";
import axios from "axios";

export const GetStudents = () => {
  const [data, setData] = useState([]);

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
    <div>
      
      <div>
        {data.length > 0 && (
          <div>
          <h1>List of Students</h1>
          <ul>
            {data.map((student) => (
              <li key={student.id}>
                Name: {student.name}, Register Number: {student.reg_num}
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
    </div>
  );
};
