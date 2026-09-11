import { Suspense } from "react"
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Technologies from "./Components/Technologies/Technologies"
import TechnologiesCard from "./Components/Technologies/TechnologiesCard"
import type { Ttechnoloy } from "./Type"

const createFetch=async():Promise<Ttechnoloy[]>=>{
  const res=await fetch('/data.json')
  const data=await res.json()
  return data
}

const techPromise=createFetch()
function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Technologies/>
      <Suspense fallback={<div>Loadddddiiiiiinnnnggggg</div>}>
      <TechnologiesCard techPromise={techPromise}/>
      </Suspense>
    </>
  )
}

export default App
