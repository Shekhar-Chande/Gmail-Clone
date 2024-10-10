import { BsFillPencilFill } from "react-icons/bs";
import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { GrDocument } from "react-icons/gr";
import './Leftbar.css'

function Leftbar(){
    return(
        <>
            <div className="leftbar">
                <div className="icon compose"><BsFillPencilFill className="svg-icon"/> <p>Compose</p></div>
                <div className="icon inbox"><MdInbox className="svg-icon"/> <p>Inbox</p></div>
                <div className="icon starred"> <FaRegStar className="svg-icon"/> <p>Starred</p></div>
                <div className="icon snooze"><FaRegClock className="svg-icon"/> <p>Snoozed</p></div>
                <div className="icon sent"><IoMdSend className="svg-icon"/> <p>Sent</p></div>
                <div className="icon draft"><GrDocument className="svg-icon"/><p>Draft</p></div>

            </div>
        </>
    )
}

export default Leftbar