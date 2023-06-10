import { useState } from "react";
import { useAuth } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormAuth = (props) => {
  const loginMock = {
    email: "teste@gmail.com",
    senha: "1234",
  };
  const [user, setUser] = useState({ email: "", password: "" });
  const { handleLogin, handleLogout } = useAuth();
  const navigate = useNavigate();

  const doLogin = (event) => {
    event.preventDefault();
    if (
      user.email === loginMock.email &&
      user.password === loginMock.senha &&
      props.type === "login"
    ) {
      handleLogin();
      navigate("/controles");
    } else {
      toast.error('Dados incorretos')
      handleLogout();
    }
  };
  const changeHandler =
    (key) =>
    ({ target }) => {
      setUser((prevUser) => ({
        ...prevUser,
        [key]: target.value,
      }));
    };

  return (
    <>
    <ToastContainer/>
      <form onSubmit={doLogin}>
        {props.values.map((value) => (
          <input
            placeholder={value}
            required
            type={value}
            onChange={changeHandler(value)}
          ></input>
        ))}
        <button type="submit">Enviar</button>
      </form>
      {props.type === "login" ? (
        <Link to="/cadastrar">Não é cadastrado? Clique aqui</Link>
      ) : (
        <Link to="/entrar">Já é cadastrado? Clique aqui</Link>
      )}
    </>
  );
};
