import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormAuth = (props) => {
  const loginMock = {
    email: "teste@gmail.com",
    senha: "1234",
  };
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const doLogin = (event) => {
    event.preventDefault();
    if (
      user.email === loginMock.email &&
      user.password === loginMock.senha &&
      props.type === "login"
    ) {
      navigate("/controles");
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
        <a href="/cadastrar">Não é cadastrado? Clique aqui</a>
      ) : (
        <a href="/entrar">Já é cadastrado? Clique aqui</a>
      )}
    </>
  );
};
