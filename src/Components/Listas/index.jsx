import { useState } from "react";
import { Button, Form, Input, Main } from "./style";

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

        <Form onSubmit={handleLista}>
          {
            <Input
              placeholder="Adicionar à lista"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              required
            ></Input>
          }
          <Button type="onSubmit">Adicionar</Button>
        </Form>
      </Main>
    </>
  );
};
