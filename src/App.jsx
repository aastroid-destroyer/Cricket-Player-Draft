import './App.css'
import SelectedPLayers from "./components/SelectedPLayers"
import Navbar from "./components/Navbar"
import { Suspense, useState } from "react"
import AvailablePlayers from './components/AvailablePlayers'
import { ToastContainer} from 'react-toastify';

const fetchPLayers = async () => {
  const res = await fetch("/players.json");

  return res.json();
}
const playersPromise = fetchPLayers()

function App() {

  const arr = ["Available", "Selected"];
  const [toggle, setToggle] = useState("Available")
  const [availableBalance, setAvailableBalance] = useState(1000000)
  const [purchasedPlayers,setPurchasedPlayers] = useState([])

  const removePlayers = (p) =>{
    const filterData = purchasedPlayers.filter(ply=>ply.player_name !== p.player_name)
    // console.log(filterData)
    setPurchasedPlayers(filterData)
    setAvailableBalance(availableBalance+parseInt(p.price.split("USD").join("").split(",").join("")))
  }


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='mx-auto w-11/12 flex items-center justify-between'>
        <h1 className='font-bold'>{toggle=="Available"?"Available":`Selected (${purchasedPlayers.length}/6)`}</h1>
        <div>
          <button onClick={()=> setToggle("Available")} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle=="Available"?"bg-[#E7FE29]":""}`}>Available</button>
          <button onClick={()=>setToggle("Selected")} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle=="Selected"?"bg-[#E7FE29]":""}`}>Selected {purchasedPlayers.length}</button>
        </div>
      </div>
      {
        toggle === "Available" ? <Suspense>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} playersPromise={playersPromise} setAvailableBalance={setAvailableBalance}></AvailablePlayers>
        </Suspense> : <SelectedPLayers removePlayers={removePlayers} purchasedPlayers={purchasedPlayers}></SelectedPLayers>
      }

      {/* <Suspense>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> */}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
