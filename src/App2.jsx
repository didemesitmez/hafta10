// useReducer kullanmadan

import { useState } from "react";

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

function App() {
  const [yapilacaklar, yapilacaklarGuncelle] = useState(ilkVeri)
  const [kullanici, kullaniciGuncelle] = useState("Hasan Tokatlı")

  const tamamlamaGuncelle = (tiklananIs) => {
    let guncelYapilacaklar = yapilacaklar.map( (yapilacakIs)=>{
        if( tiklananIs.id === yapilacakIs.id ) {
            return {...yapilacakIs, durum: !yapilacakIs.durum}
        } else {
            return yapilacakIs
        }
    } )

    yapilacaklarGuncelle(guncelYapilacaklar)
  }

  const kullaniciDegistir = (olay)=>{
    kullaniciGuncelle(olay.target.value)
  }

  const isSil = (tiklananIs)=>{
    const guncelYapilacaklar = yapilacaklar.filter( yapilacakIs=>{
        if (tiklananIs.id != yapilacakIs.id)
            return yapilacakIs

    } )

    yapilacaklarGuncelle(guncelYapilacaklar)
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
        <input type="text" value={kullanici} onChange={kullaniciDegistir} />
      </form>
    </>
  )
}

export default App
