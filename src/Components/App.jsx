import { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CadastrarPage } from "../Pages/Cadastrar";
import { CamerasComponents } from "../Pages/Cameras";
import { Controles } from "../Pages/Controles";
import { Emergencias } from "../Pages/Emergencias";
import { Home } from "../Pages/Home";
import { Lembretes } from "../Pages/Lembretes";
import { Listas } from "../Pages/Listas";
import { Login } from "../Pages/Login";
import "./App.css";

const AuthContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, handleLogin, handleLogout }}>
    <BrowserRouter>
      <Routes>
        {isLogged ? (
          <>
            <Route path="/controles" element={<Controles />} />
            <Route path="/lembretes" element={<Lembretes />} />
            <Route path="/listas" element={<Listas />} />
            <Route path="/emergencias" element={<Emergencias />} />
            <Route path="/vigilancia" element={<CamerasComponents/>}/>
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/entrar" element={<Login />} />
            <Route path="/cadastrar" element={<CadastrarPage />} />
          </>
        )}
        <Route
          path="*"
          element={<Navigate to={isLogged ? "/controles" : "/"} />}
        />
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth deve ser usado dentro de AuthContext.Provider");
  }
  return auth;
}

export { App, useAuth };
