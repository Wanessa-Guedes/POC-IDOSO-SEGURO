import { Button } from "../Buttons";

export const ControlesComponents = () => {
  const buttonsValue = ["Controles de Lâmpada", "Sensores de Movimento", "Vigilância"];

  return (
    <>
      {buttonsValue.map((buttonValue) => (
        <Button key={buttonValue} value={buttonValue} />
      ))}
    </>
  );
};