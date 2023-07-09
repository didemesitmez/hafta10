import { useContext } from "react"
import SayacKapsam from "./SayacKapsam"
import GizliKomponent from "./GizliKomponent"

const DerinKomponent = ()=>{
    const sayac = useContext(SayacKapsam)

    return (
        <>
            <p>Ben derin komponentim.</p>
            <p>Kalan hakkınız: {20-sayac}</p>
            <GizliKomponent />
        </>
    )
}

export default DerinKomponent