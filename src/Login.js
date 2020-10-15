import React from 'react'
import "./Login.css"
import DescordLogo from "./images/discordLogo.png"
import { Button } from '@material-ui/core'
import { auth,provider } from './firebase'

function Login() {
    const signIn=()=>{
        //do clever google logi
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    };   
    
    return (
        <div className="login">
        <div className="login__logo">
        <img src={DescordLogo} alt=""/>
        </div>
            <Button onClick={signIn}>Submit</Button>
        </div>
    )
}

export default Login
