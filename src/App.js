import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { StudentForm } from "./components/student_form";
import {GetStudents} from "./components/GetStudents";
import { GetSpecificStudent } from './components/GetSpecificStudent';
function App() {
  return (
    <>
    <StudentForm/>
    <GetStudents/>
    <GetSpecificStudent/>
    </>
  );
}

export default App;
