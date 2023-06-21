import { useState } from "react";
import { CallButton } from "../CallButton";
import {
  Button,
  ContainerList,
  Form,
  Input,
  List,
  ListItem,
  Phone,
  Name
} from "./style";

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
        <ul>
          <ContainerList>
            <List>
            {emergencias.map((e) => (
              <>
                <ListItem>
                  <div className="nome">
                    <h5>Nome</h5>
                    <Name>{e.nome}</Name>
                  </div>
                  <div className="telefone">
                    <h5>Telefone</h5>
                    <Phone>{e.telefone}</Phone>
                  </div>
                  <CallButton phone={e.telefone} />
                </ListItem>
              </>
            ))}
            </List>
          </ContainerList>
        </ul>

        <Form onSubmit={handleLista}>
          {
            <>
              <Input
                placeholder="Adicionar o nome"
                type="text"
                value={inputValueNome}
                onChange={handleInputChangeNome}
                required
              ></Input>
              <Input
                placeholder="Adicionar o telefone"
                type="text"
                value={inputValueTel}
                onChange={handleInputChangeTel}
                required
              ></Input>
            </>
          }
          <Button type="onSubmit">Adicionar</Button>
        </Form>
    </>
  );
};
