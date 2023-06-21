import { LembretesComponents } from "../../Components/Lembretes";
import { NavBar } from "../../Components/NavBar";
import { Main, NavBarStyle } from "./style";

export const Lembretes = () => {
  return (
    <>
      <Main>
        <NavBarStyle>
          <NavBar />
        </NavBarStyle>
        <LembretesComponents />
      </Main>
    </>
  );
};
