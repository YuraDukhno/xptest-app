
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { employees } from "./store/employeeReducer";

function App() {

  const dispatch = useDispatch()
 
  const employees = useSelector( state => state.employees.employees);
  console.log(employees)


  return (
    <div className="App">

    </div>
  );
}

export default App;


 