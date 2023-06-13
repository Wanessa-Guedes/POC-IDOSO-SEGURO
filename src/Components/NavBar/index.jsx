import { useNavigate } from "react-router-dom";
import {NavButton} from "./style";

export const NavBar = () => {
  const options = ["Controles da Casa", "Lembretes", "Listas", "Emergências"];
  const navigateOptions = ["/controles", "/lembretes", "/listas", "/emergencias"];

  const navigate = useNavigate();

    const navegar = (value) => {
      for (let i = 0; i < options.length; i++) {
        if (options[i] === value) {
          navigate(navigateOptions[i]);
          break;
        }
      }
    }

  return options.map((option) => (
    <>
      <NavButton key={option} onClick={() => navegar(option)}>{ option }</NavButton>
    </>
  ));
};
