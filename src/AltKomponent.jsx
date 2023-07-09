import DerinKomponent from "./DerinKomponent"

const AltKomponent = ({bilgi})=>{

    return (
        <>
            <p>Ben alt komponent mesajıyım</p>
            <p>Üst komponentten gelen bilgi: {bilgi}</p>
            <DerinKomponent />
        </>
    )
}

export default AltKomponent