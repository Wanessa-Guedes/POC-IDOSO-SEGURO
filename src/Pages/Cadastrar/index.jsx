import {FormAuth} from "../../Components/FormAuth"

export const CadastrarPage = () => {
    const values = ["email", "password", "confirm password"]

    return(<>
        <FormAuth values={values} type="cadastro"/>
    </>)
}