import React from "react";
import { useContext } from "react";
import { FaTimes } from 'react-icons/fa'
import { DataContext } from "../ContextAPI";

const Modal = () => {
    const {showModal,setShowModal}=useContext(DataContext)
  return (
    <main className="modal-container">
        {
            showModal && (<div className="modal-content">
            <h2>MODAL CONTENT</h2>
            <button onClick={()=>setShowModal(!showModal)} className="modal-x"><FaTimes/></button>
          </div>)
        }
      
    </main>
  );
};

export default Modal;
