import { useContext } from "react"
import SayacKapsam from "./SayacKapsam"

const GizliKomponent = ()=>{
    const {sayac, sayacGuncelle} = useContext(SayacKapsam)

    return (
        <>
            Appteki Sayac değeri: {sayac}
        </>
    )
}

export default GizliKomponent