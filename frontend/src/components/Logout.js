import React from 'react';
import '../styles/components/Logout.css';

function Logout(props) {

    const yesHandler = () => {
        console.log("Yes, logout");
    }

    const noHandler = () => {
        console.log("No, stay logged in");
        props.setTrigger(false);
    }

    return(props.trigger) ? (
        <div className="logout-outer">
            <div className="logout-inner">
                <h1>Are you sure you would</h1>
                <h1>like to logout?</h1>
                <div>
                    <button onClick={yesHandler} className="logout-option-btn">Yes</button>
                    <button onClick={noHandler} className="logout-option-btn">No</button>
                </div>
            </div>
        </div>
    ):'';
}

export default Logout;