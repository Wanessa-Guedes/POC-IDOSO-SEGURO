import { FormAuth } from "../../Components/FormAuth"

export const Login = () => {
    const values = ["email", "password"];

    return(<>
    <h1>Login</h1>
    <FormAuth values={values} type="login"/>
    </>)
}