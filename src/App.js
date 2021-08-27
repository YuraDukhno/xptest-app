
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Employees from './containers/employees';

function App() {
  return (
    <div className="App">
      <Container className="pt-5">
        <Employees />
      </Container>
    </div>
  );
}

export default App;


 