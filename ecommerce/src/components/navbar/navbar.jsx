import { HiMenuAlt4, HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch}  from "react-icons/fi";
import MenuNavigation from "./MenuNavigation";
import { useEffect, useState } from "react";

function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false);
    
    useEffect(() => {
        const headerActive = () => {
            const header = document.querySelector(".header");
            window.scrollY > 20
            ? header.classList.add("active")
            : header.classList.remove
            ("active");
        };
    window.addEventListener("scroll", headerActive);
    return () => window.removeEventListener("scroll",
    headerActive);
    }, [] );

    return ( 
        <>
        <div className="header">
            <div className="container">
                <div className="menuSearch">
                    <div className="menu_icon" onClick = {() => setMenuToggle(true)}>
                        <HiMenuAlt4 />
                    </div>
                    <FiSearch/>
                </div>
                <div className="logo">Minim</div>
                <div className="accoundAndCart">
                    <a href="">Account</a>
                    <HiOutlineShoppingBag />
                </div>
            </div>
        </div>
        <MenuNavigation setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
        </>
    )
}

export default Navbar;
