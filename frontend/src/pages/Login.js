import React from 'react';

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
            <h1>Login</h1>
        </div>
    );
}

export default Login;