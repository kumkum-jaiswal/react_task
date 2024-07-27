import { useEffect,useState } from "react";
const App = () => {
const  [cnt, setCnt]=useState(0)
const [multi,setMulti]=useState(0)
useEffect(()=>{
  setMulti(cnt*2)
},[cnt])

  return ( 
    <>
      <h1>welcome to bhopal</h1>
      <h2>my counter:{cnt}</h2>
      <h2>my multi:{multi}</h2>
      <button onClick={()=>{setCnt(cnt+1)}}>click</button>
    </>
   );
}
 
export default App;
























import { useEffect,useState } from "react";

const App = () => {
const  [cnt, setCnt]=useState(0)
useEffect(()=>{
  setTimeout(()=>{
    setCnt(cnt+1);
  } ,2000)
},[])     //[]=empty array

  return ( 
    <>
      <h1>welcome to bhopal:{cnt}</h1>
    </>
   );
}
 
export default App;


