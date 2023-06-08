import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CadastrarPage } from "../Pages/Cadastrar";
import { Controles } from "../Pages/Controles";
import { Emergencias } from "../Pages/Emergencias";
import {Home} from "../Pages/Home";
import { Lembretes } from "../Pages/Lembretes";
import { Listas } from "../Pages/Listas";
import { Login } from "../Pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/controles" element={<Controles />} />
        <Route path="/lembretes" element={<Lembretes/>}/>
        <Route path="/entrar" element={<Login/>}/>
        <Route path="/cadastrar" element={<CadastrarPage/>}/>
        <Route path="/listas" element={<Listas/>}/>
        <Route path="/emergencias" element={<Emergencias/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
