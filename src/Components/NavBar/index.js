import { useNavigate } from "react-router-dom";
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
      <button key={option} onClick={() => navegar(option)}>{ option }</button>
    </>
  ));
};
