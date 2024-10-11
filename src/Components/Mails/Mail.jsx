import './Mail.css'
import { IoMdStarOutline } from "react-icons/io";

function Mail({to, subject}) {
    return (
        <>
            <div className="middle">
                <div className="left">
                    <div className="check">
                        <input type="checkbox" />
                    </div>
                    <div className="star">
                        <IoMdStarOutline className='star-icon'/>
                    </div>
                    <div className="to">
                            {to}
                    </div>
                </div>
                <div className="md"></div>
                <div className="right-subject">
                    <div className="subject">
                        {subject}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mail