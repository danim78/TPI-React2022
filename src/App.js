import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BuscarNoticiasPagina from "./pages/BuscarNoticiasPagina";

function App() {
  return (
    <BrowserRouter text='noticias'>
      <Routes>
        <Route path="/" element={<BuscarNoticiasPagina />} />
        <Route path="/buscador" element={<BuscarNoticiasPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
