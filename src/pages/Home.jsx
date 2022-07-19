import Modal from "../components/Modal"
import Sidebar from "../components/Sidebar"
import { useContext } from "react";
import { DataContext } from "../ContextAPI";

const Home = () => {
  const {showModal,setShowModal}=useContext(DataContext)
  return (
    <div className="page">
      <Sidebar/>
      <Modal/>
      <div>
        <button onClick={()=>setShowModal(!showModal)} className={`${showModal ? "close-btn" : "modal-btn"}`}>SHOW MODAL</button>
      </div>
    </div>
  )
}

export default Home