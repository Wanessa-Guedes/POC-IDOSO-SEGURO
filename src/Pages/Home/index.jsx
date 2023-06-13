import { Button } from "../../Components/Buttons";
import { Container, Title, ButtonContainer, ButtonStyle, Image } from "./style";
import Idosos from "../../img/idosos-pg1.png";

export const Home = () => {
  const buttonsValues = ["Entrar", "Cadastrar"];
  return (
    <>
      <Container>
        <Title>IDOSO SEGURO</Title>
        <ButtonContainer>
          {buttonsValues.map((buttonValue) => (
            <ButtonStyle>
              <Button value={buttonValue} />{" "}
            </ButtonStyle>
          ))}
        </ButtonContainer>
        <Image src={Idosos} alt="DESENHO IDOSOS FELIZES ACENANDO" />
      </Container>
    </>
  );
};
