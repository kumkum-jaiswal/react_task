import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import About from "./About";
import UseSta from "./UseSta";

const App = () => {
  return ( 
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/insert" element={<Insert/>}/>
        <Route path="/display" element={<Display/>}/>
        <Route path="/Usesta" element={<UseSta/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
   );
}
 
export default App;



                                                                  
