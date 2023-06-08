import { useState } from "react";
import { Main } from "./style";

export const ListaFomr = () => {
  const [lista, setLista] = useState(["Comprar remédio", "Levar lixo"]);
  const [inputValue, setInputValue] = useState("");

  const handleLista = (event) => {
    event.preventDefault();
    setLista([...lista, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Main>
        <ul>
          {lista.map((l) => (
            <li>{l}</li>
          ))}
        </ul>

        <form onSubmit={handleLista}>
          {
            <input
              placeholder="Adicionar à lista"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              required
            ></input>
          }
          <button type="onSubmit">Adicionar</button>
        </form>
      </Main>
    </>
  );
};
