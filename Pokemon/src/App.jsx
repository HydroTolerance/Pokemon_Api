import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./page/Error";
import Gen1 from "./page/pokemondex/Gen1";
import PokemonCard from "./page/PokemonCard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Gen1/>} />
          <Route path="/Gen1" element={<Gen1 />} />
          <Route path="/pokemon/:name" element={<PokemonCard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
