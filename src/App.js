import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import { Button, Alert, Card, Breadcrumb,Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="Jumbotron Jumbotron-fluid text-center p-3 mb-4 ">
        <div className="container">
          <h1 className="display-4">Calculator</h1>
          <p className="lead"> with ueState and react-bootstrap</p>
        </div>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
