import React, { useEffect, useState } from "react";
import axios from "axios";

export const GetSpecificStudent = () => {
  const [regno, setRegno] = useState("");
  const [student, setStudent] = useState({name:"",regno:""});
  let submit=false;

    const fetchData = () => {
      if (submit===true && regno !== "") {
        axios
          .get("http://localhost:5000/getspecificstudent", { params: { reg_num: regno } })
          .then((response) => {
            console.log("Specific student data received", response.data);
            const { name, reg_num } = response.data;
            setStudent({ name, regno: reg_num });
          })
          .catch((error) => {
            console.error("Error fetching data", error);
            setStudent({ name: "", regno: "" });
            submit=false;
          });
      }
    };
  
    useEffect(() => {
      fetchData(); // Trigger the fetch when regno changes
    }, [regno]);
  
    const onSubmit = (e) => {
      e.preventDefault();
      submit=true;
      fetchData(); // Trigger the fetch on form submit
    };
  const handleChange = (e) => {
    console.log(e.target.value);
    setRegno(e.target.value);
  };

  return (
    <>
      <div>
        <h1>Get Specific Student's Details</h1>
        <form onSubmit={onSubmit} style={{display:"flex",flexDirection:"column", width:"600px",height:"150px"}}>
          <label>Register Number</label>
          <br></br>
          <input
            onChange={handleChange}
            placeholder="Enter Register number"
            style={{width:"200px"}}
          />
          <br></br>
          <button style={{width:"80px",height:"35px",borderRadius:"5px"}}>Submit</button>
        </form>
      </div>
      <div>
        {student.name!=="" && student.regno!=="" && (
          <div>
            <h2>Student details</h2>
            <p>
              Name: {student.name}, Registration Number: {student.regno}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
