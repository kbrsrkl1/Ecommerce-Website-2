import { HiMenuAlt4, HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch}  from "react-icons/fi";

function Navbar() {
    return ( 
        <>
        <div className="header">
            <div className="container">
                <div className="menuSearch">
                    <div className="menu_icon">
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
        </>
    )
}

export default Navbar;
