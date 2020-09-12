import React from 'react'
import './HomePage.css'
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaRegFlag } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaAlipay } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
function HomePage(){
    return(
        <div className="header">

        <div className="first-header">
        <div className="logo">
        <img src="/images/logo.png"alt="logo"style={{height:"40px",padding:"1rem"}}/>
        <div className="Search">
        <AiOutlineSearch style={{height:"4rem"}}/>
        <input type="Search" placeholder="Search Facebook"/>
        </div>
        </div>
        </div>

        <div className="middle-header">
        <div className="Icon">
        <AiFillHome color="#1877F2" fontSize="2rem"/>
        </div>
        <div className="Icon">
        <FaRegFlag fontSize="2rem"/>
        </div>
        <div className="Icon">
        <MdOndemandVideo fontSize="2rem"/>
        </div>
        <div className="Icon">
        <FaUsers fontSize="2rem"/>
        </div>
        <div className="Icon">
        <FaAlipay fontSize="2rem"/>
        </div>
        </div>

        <div className="third-header">
            <div className="Pluss">
            <FaUserCircle/>
            Meer
            </div>
            <div className="Plus">
            <FaPlusCircle/>
            </div>
            <div className="Plus">
            <FaFacebookMessenger/>
            </div>
            <div className="Plus">
            <FaBell/>
            </div>
            <div className="Plus">
            <FaCaretDown/>
            </div>
        </div>
        </div>
    )
}
export default HomePage