import Login from "../../Components/Login/Login"
import './Gmail_Login.css'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
function Gmail_Login(){
    const navigate = useNavigate(); 
    const onSuccess =(res)=>{

        const decodeResponse = jwtDecode(res.credential)
        console.log("Login Success! Current User: ", decodeResponse);
        console.log(decodeResponse.email_verified);
        if(decodeResponse.email_verified== true)
        {
            navigate('/Home')
        }
        
    }
    const onError=(res)=>{
        console.log("Login Failed! res:");
        
    }
    
    return(
        <>
            <div className="container-gmail">
                <div className="left-gmail">
                    <img id="homepage-gmail" src="https://images.pexels.com/photos/5706001/pexels-photo-5706001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="right-gmail">
                    <div className="logn">
                    <Login  onSuccess={onSuccess} onError={onError}/>
                    </div>
                 
                </div>
            </div>

            
        </>
    )
}

export default Gmail_Login