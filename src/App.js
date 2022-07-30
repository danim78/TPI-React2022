import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BuscarNoticiasPagina from "./pages/BuscarNoticiasPagina";
import Error404 from "./components/general/error404";

function App() {
  return (
    <BrowserRouter text='noticias'>
      <Routes>
        <Route path="/" element={<BuscarNoticiasPagina />} />
        <Route path="/buscador" element={<BuscarNoticiasPagina />} />
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
