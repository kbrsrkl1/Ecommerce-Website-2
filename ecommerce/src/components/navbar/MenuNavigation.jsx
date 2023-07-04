//import React from 'react'
import { BsXLg } from "react-icons/bs"
function MenuNavigation({menuToggle, 
    setMenuToggle }) {
    return ( 
    <div
    className={`${menuToggle ?
    "menuNavigation open" :
    "menuNavigation"}`}>
    <div className="menu">
        <div className="minim">Minim
        </div>
        <div className="menuX" onClick={(prev) => setMenuToggle(!prev)}>
            <BsXLg />
        </div>
    </div>
    </div>
    );
}

export default MenuNavigation;
