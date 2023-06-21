import { useNavigate } from "react-router-dom";

export const Button = ({value}) => {
    const buttonsNavigate = ["/controles-lampada", "/sensores", "/vigilancia", "/entrar", "/cadastrar"];
    const buttonsValue = ["Controles de Lâmpada", "Sensores de Movimento", "Vigilância", "Entrar", "Cadastrar"];
    const navigate = useNavigate();
  
    const navegar = (value) => {
      for (let i = 0; i < buttonsValue.length; i++) {
        if (buttonsValue[i] === value) {
          navigate(buttonsNavigate[i]);
          break;
        }
      }
    };
    return(<>
        <button onClick={() => navegar(value)}>{value}</button>
    </>)
}