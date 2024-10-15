 import { GoogleLogin } from '@react-oauth/google'
// import { jwtDecode } from "jwt-decode";

function Login({onSuccess, onError}){
    // const onSuccess =(res)=>{
    //     const decodeResponse = jwtDecode(res.credential)
    //     console.log("Login Success! Current User: ", decodeResponse);
    //     console.log(decodeResponse.email_verified);
    //     console.log(decodeResponse.family_name);
        
    // }


    // const onError=(res)=>{
    //     console.log("Login Failed! res:");
        
    // }
    return(
        <>
            <div id="signIn">
                <GoogleLogin  onSuccess={onSuccess} onError={onError} />
            </div>
        </>
    )
}

 export default Login

