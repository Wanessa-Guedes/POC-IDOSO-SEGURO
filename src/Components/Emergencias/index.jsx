import { useState } from "react";
import { CallButton } from "../CallButton";
import { Contacts, Main } from "./style";

export const EmergenciasForm = () => {
  const [emergencias, setEmergencias] = useState([
    { nome: "Larissa", telefone: "3232323232" },
    { nome: "Manuel", telefone: "33333333" },
  ]);
  const [inputValueNome, setInputValueNome] = useState("");
  const [inputValueTel, setInputValueTel] = useState("");

  const handleLista = (event) => {
    event.preventDefault();
    setEmergencias([
      ...emergencias,
      { nome: inputValueNome, telefone: inputValueTel },
    ]);
    setInputValueNome("");
    setInputValueTel("");
  };

  const handleInputChangeNome = (event) => {
    setInputValueNome(event.target.value);
  };

  const handleInputChangeTel = (event) => {
    setInputValueTel(event.target.value);
  };

  return (
    <>
      <Main>
        <ul>
          {emergencias.map((e) => (
            <>
              <Contacts>
                <div className="nome">
                <h5>Nome</h5>
                <li>{e.nome}</li>
                </div>
                <div className="telefone">
                <h5>Telefone</h5>
                <li>{e.telefone}</li>
                </div>
                <CallButton phone={e.telefone}/>
              </Contacts>
            </>
          ))}
        </ul>

        <form onSubmit={handleLista}>
          {
            <>
              <input
                placeholder="Adicionar o nome"
                type="text"
                value={inputValueNome}
                onChange={handleInputChangeNome}
                required
              ></input>
              <input
                placeholder="Adicionar o telefone"
                type="text"
                value={inputValueTel}
                onChange={handleInputChangeTel}
                required
              ></input>
            </>
          }
          <button type="onSubmit">Adicionar</button>
        </form>
      </Main>
    </>
  );
};
