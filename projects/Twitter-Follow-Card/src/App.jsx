
// import { useState } from "react";
import "./App.css";
import {TwitterFollowCard} from "./TwitterFollowCard.jsx"

export function App() {
// const [nombre, setname] = useState('Carlos Barragan')
// const cambio = ()=>{
//   nombre(setname('Estiven Yepes'))
// }
  return (
    <div className="App">
      <TwitterFollowCard userName="MIDUDEV">
        Ricardo Gomez
      </TwitterFollowCard>
      <TwitterFollowCard  userName="WestCOL_">
        Westcol
      </TwitterFollowCard>
      <TwitterFollowCard  userName="ElPesoPluma">
        Peso Pluma
      </TwitterFollowCard>
    {/* <button onClick={cambio}>cambio de nombre</button> */}

    </div>
  );
}
