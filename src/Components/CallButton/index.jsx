import { ButtonList } from "./style"

export const CallButton = ({phone}) => {
return (<>
    <a href={`tel:${phone}`}>

        <ButtonList>Ligar</ButtonList>
    </a>
</>)
}