import { NavBar } from "../../Components/NavBar";
import { ControlesComponents } from "../../Components/Controles";
import {
  Container,
  NavBarStyle,
  MainContent,
  VerticalButtons,
  Image,
} from "./style";
import Idosos from "../../img/casa-de-repouso.png";

export const Controles = () => {
  return (
    <>
      <Container>
        <NavBarStyle>
          <NavBar />
        </NavBarStyle>
        <MainContent>
          <VerticalButtons>
          <ControlesComponents />
          </VerticalButtons>
          <Image src={Idosos} alt="Idosos com uma casa ao redor" />
        </MainContent>
      </Container>
    </>
  );
};
