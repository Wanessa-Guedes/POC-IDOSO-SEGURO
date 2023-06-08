import { ButtonStyle, FormStyle, InputStyle, LabelStyle } from "./formStyle";

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
};

const Form = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    onSubmit(title);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h2>Adicionar Lembrete</h2>
      <LabelStyle htmlFor="title">Título:</LabelStyle>
      <InputStyle type="text" id="title" name="title" required />
      <ButtonStyle type="submit">Adicionar</ButtonStyle>
    </FormStyle>
  );
};

export { Modal, Form };
