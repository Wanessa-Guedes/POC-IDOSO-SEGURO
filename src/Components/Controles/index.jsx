import { Button } from "../Buttons";
import { ButtonStyle } from "./style";

export const ControlesComponents = () => {
  const buttonsValue = ["Controles de Lâmpada", "Sensores de Movimento", "Vigilância"];

  return (
    <>
      {buttonsValue.map((buttonValue) => (
        <ButtonStyle><Button key={buttonValue} value={buttonValue} /></ButtonStyle>
      ))}
    </>
  );
};