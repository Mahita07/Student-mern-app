/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";

export const GetStudents = () => {
  const [regno, setRegno] = useState("");
  const [student,setStudent] = useState({name:"",reg_num:""});
  const onSubmit = (e)=>{
    axios.get("https://localhost:5000/getspecificstudent",{reg_num:regno}).then((response)=>{
        console.log("Specific student data received");
        setStudent(response.data);
    })
    .catch((error)=>{
        console.error("Error fetching data",error);
    })
  }
  const handleChange = (e)=>{
    setRegno()
  }


  return (
    <div>
      <h1>Students</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="Enter registration number"/>
            <button>Submit</button>
        </form>
        {student.name && 
        <div>
            <h2>Student details</h2>
            <p>Name: {student.name} Registration Number: {student.regno}</p>
        </div>
        }
    </div>
  );
};*/