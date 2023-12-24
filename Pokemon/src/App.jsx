import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Error from "./page/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
