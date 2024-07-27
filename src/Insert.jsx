import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert = () => {
    const [input,setinput]=useState({});
    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setinput((values)=>({...values, [name]:value}))
    }

    const handle=()=>{
        let url="http://localhost:3000/stu";
        axios.post(url,input).then((res)=>{
            alert("data save")
        })
    }
    return ( 
        <>
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>rollno </Form.Label>
        <Form.Control type="text" name='rollno' value={input.rollno}
        onChange={handleinput} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" name='name' value={input.name}
        onChange={handleinput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>city</Form.Label>
        <Form.Control type="text" name='city' value={input.city}
        onChange={handleinput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>fees</Form.Label>
        <Form.Control type="text" name='fees' value={input.fees}
        onChange={handleinput}  />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handle}>
        Submit
      </Button>
    </Form>
        </>
     );
}
 
export default Insert;