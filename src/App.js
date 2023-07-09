import { useState } from "react"
import AltKomponent from "./AltKomponent";
import SayacKapsam from "./SayacKapsam";

function App() {
  const [sayac, sayacGuncelle] = useState(0)

  return (
    <>
      <SayacKapsam.Provider value={{sayac, sayacGuncelle}}>
        <p>Ben Ana komponentim</p>
        <button onClick={()=>{sayacGuncelle(eski=>eski+1)}}>+</button>

        <AltKomponent bilgi={sayac} />
      </SayacKapsam.Provider>
    </>
  );
}

export default App;
