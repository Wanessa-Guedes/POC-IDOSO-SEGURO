import { NavBar } from "../../Components/NavBar";
import { ControlesComponents } from "../../Components/Controles";
import { Main, NavBarStyle, ControlesStyle } from "./style";
import Idosos from "../../img/casa-de-repouso.png"

export const Controles = () => {
  return (
    <>
      <Main>
        <NavBarStyle>
          <NavBar />
        </NavBarStyle>
        <ControlesStyle>
          <ControlesComponents />
        </ControlesStyle>
        <img src={Idosos} alt="Idosos com uma casa ao redor"/>
      </Main>
    </>
  );
};
