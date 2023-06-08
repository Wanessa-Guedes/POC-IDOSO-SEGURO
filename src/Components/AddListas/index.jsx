import { useState } from "react"

export const AddLista = (props) => {
    const [list, setLista] = useState({});

    const handleLista = (event) => {
        event.preventDefault();
        localStorage.setItem('lista', JSON.stringify(list));
    }

    const changeHandler = (key) => ({target}) => {
        setLista((prevLista) =>({
            ...prevLista,
            [key]: target.value
        }) )
    }

    return(<>
        <form onSubmit={handleLista}>
                {
                        <input placeholder={props.placeholder}
                        type={props.type}
                        onChange={changeHandler(props)}
                        required></input>
                }
                <button type="onSubmit">Adicionar</button>
        </form>
    
    </>)
}