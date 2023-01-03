import React from 'react';
import '../styles/pages/Login.css';

function Login(){

    function Options(){
        return(
            <div className="login-inner">
                <h1>MyPlanner</h1>
                <button className="login-btn">Login</button>
                <button className="signup-btn">SignUp</button>
            </div>
        );
    }

    function Login(){
        return(
            <form className="login-inner">
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
            </form>
        );
    }

    function SignUp(){
        return(
            <form className="login-inner">
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
                <input placeholder="Verify Password"></input>
            </form>
        );
    }

    return(
        <div className="login-page">
            <Login/>
        </div>
    );
}

export default Login;