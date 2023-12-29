import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Error from "./page/Error";
import Gen1 from "./page/Gen1";
import Gen2 from "./page/Gen2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Gen1" element={<Gen1/>}/>
          <Route path="/Gen2" element={<Gen2/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
