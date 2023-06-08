import { EmergenciasForm } from "../../Components/Emergencias";
import { NavBar } from "../../Components/NavBar";
import { Main, NavBarStyle } from "./style";

export const Emergencias = () => {
  return (
    <>
      <Main>
        <NavBarStyle>
          <NavBar />
        </NavBarStyle>
        <EmergenciasForm />
      </Main>
    </>
  );
};
