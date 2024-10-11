import './Rightbar.css';
import Contacts from '../../assets/Google_Contacts.png'
import Task from '../../assets/Google_Task.png'
import Keep from '../../assets/keep.png'
import Calender from '../../assets/Calender.png'
function Rightbar(){
    return(
        <>
            <div className="rightbar">
             <img id='one' src={Calender} alt="" />
             <img  src={Keep} alt="" />
             <img src={Task} alt="" />
             <img  src={Contacts} alt="" />
            <hr />
            </div>
        </>
    )
}

export default Rightbar;