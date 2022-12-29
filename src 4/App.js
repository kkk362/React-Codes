import logo from './logo.svg';
 import './App.css';

//import 'bootstrap/dist/css/bootstrap.min.css';
import { ToggleButton,Button,CloseButton } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

function App() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
  // return (
  //   <div className="App">
  //     <h1>This is my mail component</h1>
  //     <Button  >BootStrapButton</Button><br></br>
  //     <ToggleButton>ToggleButton</ToggleButton><br></br>
  //     <CloseButton>Close btn</CloseButton>
      
  //   </div>
  // );
}

export default App;
