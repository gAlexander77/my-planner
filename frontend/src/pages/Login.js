import React, { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import { TextField } from '@mui/material';
import '../styles/pages/Login.css';

function Login(){

    const [login, setLogin] = useState(null);

    function Options(){

        const loginHandler = (evt) => {
            evt.preventDefault();
            setLogin(true);       
        }
        
        const signupHandler = (evt) => {
            evt.preventDefault();
            setLogin(false);       
        }

        return(login) === null ? (
            <div className="login-inner">
                <h1>MyPlanner</h1>
                <button className="login-btn" onClick={loginHandler}>Login</button>
                <button className="signup-btn" onClick={signupHandler}>SignUp</button>
            </div>
        ):'';
    }

    function Login(){
        
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const exitHandler = (evt) => {
            evt.preventDefault();
            setLogin(null);       
        }
        
        const usernameHandler = (evt) => {
            setUsername(evt.target.value);
        }

        const passwordHandler = (evt) => {
            setPassword(evt.target.value);
        }

        const loginHandler = (evt) => {
            evt.preventDefault();
        }

        return(login) === true ? (
            <form className="login-inner">
                <button className="login-exit-btn" onClick={exitHandler}><BsXLg/></button>
                <div className="login-input-container">
                    <TextField
                        variant="outlined"
                        label="Username"
                        type="text"
                        size="small"
                        value={username}
                        onChange={usernameHandler}
                    />
                </div>
                <div className="login-input-container">
                    <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        size="small"
                        value={password}
                        onChange={passwordHandler}
                    />
                </div>
                <button onClick={loginHandler}>Login</button>
            </form>
        ):'';
    }

    function SignUp(){
        
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [verifyPassword, setVerifyPassword] = useState('');

        const exitHandler = (evt) => {
            evt.preventDefault();
            setLogin(null);       
        }

        const usernameHandler = (evt) => {
            setUsername(evt.target.value);
        }

        const passwordHandler = (evt) => {
            setPassword(evt.target.value);
        }

        const verifyPasswordHandler = (evt) => {
            setVerifyPassword(evt.target.value);
        }

        const createAccountHandler = (evt) => {
            evt.preventDefault();
        }

        return(login) === false ? (
            <form className="login-inner">
                <button className="login-exit-btn" onClick={exitHandler}><BsXLg/></button>
                <div className="login-input-container">
                    <TextField
                        variant="outlined"
                        label="Username"
                        type="text"
                        size="small"
                        value={username}
                        onChange={usernameHandler}
                    />
                </div>
                <div className="login-input-container">
                    <TextField
                        className="login-input"
                        variant="outlined"
                        label="Password"
                        type="password"
                        size="small"
                        value={password}
                        onChange={passwordHandler}
                    />
                </div>
                <div className="login-input-container">
                    <TextField
                        variant="outlined"
                        label="Verify Password"
                        type="password"
                        size="small"
                        value={verifyPassword}
                        onChange={verifyPasswordHandler}
                    />
                </div>
                <button onClick={createAccountHandler}>Create Account</button>
            </form>
        ):'';
    }

    return(
        <div className="login-page">
            <Options/>
            <Login/>
            <SignUp/>
        </div>
    );
}

export default Login;