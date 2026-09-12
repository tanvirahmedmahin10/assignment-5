import { Suspense, useState } from "react"
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Technologies from "./Components/Technologies/Technologies"
import TechnologiesCard from "./Components/Technologies/TechnologiesMap"
import type { Ttechnoloy } from "./Type"
import TechnologiesMap from "./Components/Technologies/TechnologiesMap"

const createFetch=async():Promise<Ttechnoloy[]>=>{
  const res=await fetch('/data.json')
  const data=await res.json()
  return data
}

const techPromise=createFetch()
function App() {
  const [added, setAdded] = useState<Ttechnoloy[]>([]);
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Technologies/>
      <Suspense fallback={<div>Loadddddiiiiiinnnnggggg</div>}>
      <TechnologiesMap techPromise={techPromise} added={added} setAdded={setAdded}></TechnologiesMap>
      </Suspense>
    </>
  )
}

export default App
