import {menuItems} from "../menuItems";
import MenuItems from "./MenuItems";

import './Navbar.css';
const Navbar = () => {

   return (<> <nav>
       <ul className = "menus" > {
           menuItems.map((menu, index) => {
               const depthLevel = 0;
               return <MenuItems items = {
                   menu
               }
               key = {
                   index
               }
               depthLevel = {
                   depthLevel
               }/>;
           })
       } </ul>
 </nav>
</>
   );
};

export default Navbar;
/*
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import { useState } from "react";
import "./Navbar.css";
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Header.css"
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav >
      <ul className={`menus ${isMenuOpen ? "open" : ""}` } >
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              isMenuOpen={isMenuOpen}
            />
          );
        })}
              <button className="nav-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FontAwesomeIcon icon={faXmark} className="nav-icon"/> :  <FontAwesomeIcon icon={faBars} className="nav-icon"/>}
      </button>
      </ul>
    </nav>
  );
};

export default Navbar;
*/




