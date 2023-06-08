import styled from "styled-components";

export const ModalStyle = styled.div`
  /* Estilos do modal */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const FormStyle = styled.form`
  /* Estilos do formulário */
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;

export const LabelStyle = styled.label`
  /* Estilos do label */
  font-weight: bold;
`;

export const InputStyle = styled.input`
  /* Estilos do input */
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonStyle = styled.button`
  /* Estilos do botão */
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;