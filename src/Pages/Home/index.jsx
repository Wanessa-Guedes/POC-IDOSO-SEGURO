import { Button } from "../../Components/Buttons";
import {Main} from "./style";
import Idosos from "../../img/idosos-pg1.png";

export const Home = () => {
    const buttonsValues = ["Entrar", "Cadastrar"];
  return (
    <>
    <Main>
      <h1>IDOSO SEGURO</h1>
      {buttonsValues.map((buttonValue) => (
        <Button value={buttonValue}/>
      ))}
      <img src={Idosos} alt="DESENHO IDOSOS FELIZES ACENANDO"/>
      </Main>
    </>
  );
};
