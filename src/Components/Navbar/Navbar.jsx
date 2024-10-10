import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";



import './Navbar.css'
function Navbar(){
    return(
        <>
            <div className="header">
                <div className="left">
                    <div className="hamburger"> <RxHamburgerMenu className="ham"/> </div>
                    <div className="logo"><img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt=""/></div>
                    <div className="gmail">Gmail</div>
                    <div className="search"><IoSearchOutline className="search-outline"/> <input type="text" placeholder="Search mail"/><TbAdjustmentsSearch className="filter"/></div>
                </div>
                <div className="right">
                    <div className="icon support"><MdOutlineContactSupport /></div>
                    <div className="icon settings"><IoMdSettings /></div>
                    <div className="icon dots"><PiDotsNineBold /></div>
                    <div className="account"><VscAccount /></div>
                </div>
            </div>
        </>
    )
}
export default Navbar