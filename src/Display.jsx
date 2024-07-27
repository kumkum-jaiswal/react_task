import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Display = () => {
    const[mydata,setmydata]=useState([]);
    const loadData=()=>{
        let url="http://localhost:3000/stu";
        axios.get(url).then((res)=>{
            setmydata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                </tr>
            </>
        )
    })
    return ( 
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th> Name</th>
          <th>city</th>
          <th>fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
            
        </>
     );
}
 
export default Display;