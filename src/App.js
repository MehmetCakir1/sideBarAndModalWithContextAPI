import { DataContext } from "./ContextAPI"
import AppRouter from "./router/AppRouter"
import "./App.css"
import {links,social} from "./helper/data"
import { useState } from "react"

const App = () => {
  const [linksData,setLinksData]=useState(links)
  const [socialData,setSocialData]=useState(social)
  const [isVisible,setIsVisible]=useState(false)
  const [showModal,setShowModal]=useState(false)
  // console.log(social);
  // console.log(links);

  return (
    <div>
      <DataContext.Provider value={{links,social,isVisible,setIsVisible,showModal,setShowModal}}>
        <AppRouter/>
      </DataContext.Provider>
    </div>
  )
}

export default App