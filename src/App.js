import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route}  from "react-router-dom";
import { StudentForm } from "./components/student_form";
import {GetStudents} from "./components/GetStudents";
import { GetSpecificStudent } from './components/GetSpecificStudent';
import { DeleteStudent } from './components/DeleteStudent';
import { UpdateStudent } from './components/UpdateStudent';
import {Home} from "./components/Home";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/createStudent" element={<StudentForm/>}/>
        <Route exact path="/getAllStudents" element={<GetStudents/>}/>
        <Route exact path="/getSpecificStudent" element={<GetSpecificStudent/>}/>
        <Route exact path="/deleteStudent" element={<DeleteStudent/>}/>
        <Route exact path="/updateStudent" element={<UpdateStudent/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
