//App2 komponentinin useReducer ile yeniden yazılmış hali

import { useReducer } from "react";

const ilkVeri = [
  {
    id: 1,
    baslik: "Yumurta alınacak",
    durum: false,
  },

  {
    id: 2,
    baslik: "Süt alınacak",
    durum: false,
  },
]


const yapilacaklarReducer = (state, aksiyon)=>{
    switch( aksiyon.type ) {

        case "DURUM_DEGISTIR":
            return state.map( (yapilacakIs)=>{
                if( aksiyon.id === yapilacakIs.id ) {
                    return {...yapilacakIs, durum: !yapilacakIs.durum}
                } else {
                    return yapilacakIs
                }
            } )
        
        case "IS_SIL":
            return state.filter( yapilacakIs=>{
                if (aksiyon.id != yapilacakIs.id)
                    return yapilacakIs
            } )

        default:
            return state
    }
}

const kullaniciReducer = (state, aksiyon)=> {
    switch( aksiyon.type ) {

        case "ISIM_DEGISTIR":
            return aksiyon.yeniDeger

        default:
            return state
    }
}

function App() {
  const [yapilacaklar, yapilacaklarVekilFonksiyonu] = useReducer( yapilacaklarReducer, ilkVeri)
  const [kullanici, kullaniciVekilFonksiyonu] = useReducer( kullaniciReducer, "Hasan Tokatlı")

  const tamamlamaGuncelle = (tiklananIs) => {
    yapilacaklarVekilFonksiyonu( { type: "DURUM_DEGISTIR", id: tiklananIs.id })
  }

  const isSil = (tiklananIs)=>{
    yapilacaklarVekilFonksiyonu( { type: "IS_SIL", id: tiklananIs.id })
  }

  return (
    <>
        <header><h2>{kullanici}</h2></header>

      {yapilacaklar.map((yapilacakIs) => (
        <div key={yapilacakIs.id}>
          <label>
            <input
              type="checkbox"
              checked={yapilacakIs.durum}
              onChange={() => tamamlamaGuncelle( yapilacakIs )}
            />
            {yapilacakIs.baslik} <button onClick={()=>{ isSil(yapilacakIs) }}>Sil</button>
          </label>
        </div>
      ))}

      <form style={{marginTop: 30}}>
        <h3 style={{marginBottom: 10}}>Kullanıcı Adı güncelle</h3>
        <input type="text" value={kullanici} onChange={ (olay)=>{  kullaniciVekilFonksiyonu( {type: "ISIM_DEGISTIR", yeniDeger: olay.target.value} ) } } />
      </form>
    </>
  )
}

export default App
