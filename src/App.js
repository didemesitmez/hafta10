import { useState } from "react"
import AltKomponent from "./AltKomponent";

function App() {
  const [sayac, sayacGuncelle] = useState(0)

  return (
    <>
      <p>Ben Ana komponentim</p>
      <button onClick={()=>{sayacGuncelle(eski=>eski+1)}}>+</button>

      <AltKomponent bilgi={sayac} />
    </>
  );
}

export default App;
