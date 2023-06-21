import { LampadaPage } from "../../Components/LampadasPage";
import { NavBar } from "../../Components/NavBar/index";
import { Main, NavBarStyle } from "./style";

export const Lampadas = () => {
  return (
    <>
      <Main>
        <NavBarStyle>
          <NavBar />
        </NavBarStyle>
        <LampadaPage/>
      </Main>
    </>
  );
};
