import { useContext } from "react";
import { DataContext } from "../ContextAPI";
import HamburgerMenu from "./HamburgerMenu";
import Header from "./Header";
import Links from "./Links";
import Social from "./Social";

const Sidebar = () => {
  const { isVisible, setIsVisible } = useContext(DataContext);
  console.log(isVisible);
  return (
    <>
      <div className= {`${!isVisible ? "disappear" : "sidebar"}`}>
        <Header isVisible={isVisible} setIsVisible={setIsVisible} />
        <Links />
        <Social />
      </div>
      <div className= {`${!isVisible ? "hamburger" :"disappearHam"}`}>
          <HamburgerMenu isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
    </>
  );
};

export default Sidebar;

