import { FormAuth } from "../../Components/FormAuth"

export const Login = () => {
    const values = ["email", "password"];

    return(<>
    <FormAuth values={values} type="login"/>
    </>)
}