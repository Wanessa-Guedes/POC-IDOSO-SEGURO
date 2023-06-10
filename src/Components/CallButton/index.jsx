export const CallButton = ({phone}) => {
return (<>
    <a href={`tel:${phone}`}>

        <button>Ligar</button>
    </a>
</>)
}