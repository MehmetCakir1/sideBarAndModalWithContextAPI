import { FaBars } from "react-icons/fa"

const HamburgerMenu = ({isVisible,setIsVisible}) => {
  return (
    <div>
        <button onClick={()=>setIsVisible(!isVisible)}  className= {`${!isVisible ? "hamburger" :"disappearHam"}`}><FaBars/></button>
    </div>
  )
}

export default HamburgerMenu