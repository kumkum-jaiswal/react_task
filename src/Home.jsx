import { useState } from "react";
import Button from 'react-bootstrap/Button';

const Home = () => {
   const [cnt,setCnt]=useState(0);
   return ( 
      <>
         <h1>count program:{cnt}</h1>
         <Button variant="primary" onClick={()=>{setCnt(cnt+1)}}>increment</Button>
      <Button variant="secondary" onClick={()=>{setCnt(cnt-1)}}>decrement</Button>
      <Button variant="success" onClick={()=>{setCnt(0)}}>reset</Button>
         
      </>
    );
}
 
export default Home;