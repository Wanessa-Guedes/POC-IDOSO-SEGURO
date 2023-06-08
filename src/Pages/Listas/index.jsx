import { ListaFomr } from "../../Components/Listas";
import { NavBar } from "../../Components/NavBar";
import { Main, NavBarStyle } from "./style";

export const Listas = () => {
  return (
    <>
      <Main>
        <NavBarStyle>
          <NavBar />
        </NavBarStyle>
        <ListaFomr />
      </Main>
    </>
  );
};
