import './Rightbar.css';
import Contacts from '../../assets/Google_Contacts.png'
import Task from '../../assets/Google_Task.png'
import Keep from '../../assets/keep.png'
import Calender from '../../assets/Calender.png'
import { Link } from 'react-router-dom';
function Rightbar() {
    return (
        <>
            <div className="rightbar">
                <Link to="https://calendar.google.com/calendar/" target='_blank'> <img id='one' src={Calender} alt="" /> </Link>
                <Link to="https://keep.google.com/" target='_blank'><img src={Keep} alt="" /> </Link>
                <Link to="https://tasks.google.com/" target='_blank'><img src={Task} alt="" /></Link>
                <Link to="https://contacts.google.com/" target='_blank'><img to src={Contacts} alt="" /></Link>
                <hr />
            </div>
        </>
    )
}

export default Rightbar;