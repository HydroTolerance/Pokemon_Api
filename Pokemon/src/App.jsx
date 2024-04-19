import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./page/Error";
import Gen1 from "./page/pokemondex/Gen1";
import Gen2 from "./page/pokemondex/Gen2";
import Gen3 from "./page/pokemondex/Gen3";
import Gen4 from "./page/pokemondex/Gen4";
import Gen5 from "./page/pokemondex/Gen5";
import Gen6 from "./page/pokemondex/Gen6";
import Gen7 from "./page/pokemondex/Gen7";
import Gen8 from "./page/pokemondex/Gen8";
import Gen9 from "./page/pokemondex/Gen9";
import Other from "./page/Other";

import AllGen from "./page/pokemondex/AllGen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Gen1/>} />
          <Route path="/Gen1" element={<Gen1 />} />
          <Route path="/AllGen" element={<AllGen />} />
          <Route path="/Gen1" element={<Gen1 />} />
          <Route path="/Other/:id" element={<Other />} />
          <Route path="/Gen2" element={<Gen2 />} />
          <Route path="/Gen3" element={<Gen3 />} />
          <Route path="/Gen4" element={<Gen4 />} />
          <Route path="/Gen5" element={<Gen5 />} />
          <Route path="/Gen6" element={<Gen6 />} />
          <Route path="/Gen7" element={<Gen7 />} />
          <Route path="/Gen8" element={<Gen8 />} />
          <Route path="/Gen9" element={<Gen9 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
