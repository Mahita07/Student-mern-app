import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export const DeleteStudent = () => {
  const [regno, setRegno] = useState("");
  let submit=false;
  const navigate=useNavigate();
    const deleteData = () => {
      if (submit===true && regno !== "") {
        axios
          .delete("http://localhost:5000/deletestudent", {params:{ reg_num: regno }})
          .then((response) => {
            console.log("Specific student data deleted", response.data);
            if(response.data.success===true){
                alert("Student details deleted.");
            } 
          })
          .catch((error) => {
            console.error("Error fetching data", error);
            submit=false;
          });
      }
    };
  
    /*useEffect(() => {
      deleteData(); // Trigger the fetch when regno changes
    }, [regno]);*/
  
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(regno);
      submit=true;
      deleteData(); // Trigger the fetch on form submit
      window.location.reload();
    };
  const handleChange = (e) => {
    console.log(e.target.value);
    setRegno(e.target.value);
  };

  const goBackHome = ()=>{
    navigate("/");
  }

  return (
    <>
          <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
        <h2 >Delete Student Details</h2>
        <form onSubmit={onSubmit} style={{display:"flex",flexDirection:"column"}}>
          <label>Register Number</label>
          <br></br>
          <input
            onChange={handleChange}
            placeholder="Enter Register number"
            style={{width:"200px"}}
          />
          <br></br>
          <div>
          <button style={{width:"80px",height:"35px",borderRadius:"5px"}}>Submit</button>
          <Button
            onClick={goBackHome}
            style={{ margin: "10px" }}
            variant="info"
          >
          Go Back Home
          </Button>{" "}
          </div>
        </form>
      </div>
    </>
  );
};
