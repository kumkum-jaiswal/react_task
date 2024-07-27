import { useState } from "react";

const UseSta = () => {
  const [color,setColor]=useState("red")
  return(
    <>
      <h1 style={{color:color}}>welcome: {color}</h1>
      <button onClick={()=>{setColor("green")}}>click</button>
      <button onClick={()=>{setColor("yellow")}}>click</button>
      <button onClick={()=>{setColor("orange")}}>click</button>
      <button onClick={()=>{setColor("blue")}}>click</button>
    </>
  )
}
export default UseSta;        