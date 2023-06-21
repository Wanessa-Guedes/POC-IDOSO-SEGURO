import { SensoresController } from "./addSensores";
import { useState } from "react";
import {
  Checkbox,
  Container,
  Label,
  SwitchInput,
  SwitchLabel,
  SwitchSlider,
} from "./style";

export const SensoresPage = () => {
  const options = ["Sensor quarto principal", "Sensor Sala"];
  const [selectedOptions, setSelectedOptions] = useState(options);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <div>
        {options.map((option, index) => (
          <Container key={index}>
            <SwitchInput
              type="checkbox"
              id={`switch-${index}`}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            <SwitchLabel
              htmlFor={`switch-${index}`}
              isActive={selectedOptions.includes(option)}
            >
              {option}
              <SwitchSlider isActive={selectedOptions.includes(option)} />
            </SwitchLabel>
          </Container>
        ))}
      </div>

      <SensoresController />
    </>
  );
};
