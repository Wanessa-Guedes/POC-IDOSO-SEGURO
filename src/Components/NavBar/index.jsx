import { useNavigate } from "react-router-dom";
import {Img, NavButton} from "./style";
import { useAuth } from "../App";
import logoutImage from "../../img/logout.png";

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

    const { handleLogout } = useAuth();

    const logout = () => {
      handleLogout();
    }

  return (<>
  
 <Img src={logoutImage} onClick={() => logout()}/>
  
  {options.map((option) => (
    <>
      <NavButton key={option} onClick={() => navegar(option)}>{ option }</NavButton>
    </>
  ))}
  </>);
};
