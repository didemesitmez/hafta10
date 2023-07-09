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

const reducerFonksiyonu = (state, aksiyon) => {
  switch (aksiyon.type) {
    case "COMPLETE":
      return state.map((yapilacakIs) => {
        if (yapilacakIs.id === aksiyon.id) {
          return { ...yapilacakIs, durum: !yapilacakIs.durum }
        } else {
          return yapilacakIs
        }
      })
    default:
      return state
  }
}

function App() {
  const [yapilacaklar, vekilFonksiyon] = useReducer(reducerFonksiyonu, ilkVeri)

  const tamamlamaGuncelle = (yapilacakIs) => {
    vekilFonksiyon({ type: "COMPLETE", id: yapilacakIs.id })
  }

  return (
    <>
      {yapilacaklar.map((yapilacakIs) => (
        <div key={yapilacakIs.id}>
          <label>
            <input
              type="checkbox"
              checked={yapilacakIs.durum}
              onChange={() => tamamlamaGuncelle( yapilacakIs )}
            />
            {yapilacakIs.baslik}
          </label>
        </div>
      ))}
    </>
  )
}

export default App
