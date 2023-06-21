import { NavBar } from "../../Components/NavBar";
import { SensoresPage } from "../../Components/SensoresPage";
import { Main, NavBarStyle } from "./style";

export const Sensores = () => {
  return (
    <>
      <Main>
        <NavBarStyle>
          <NavBar />
        </NavBarStyle>
        <SensoresPage/>
      </Main>
    </>
  );
};
