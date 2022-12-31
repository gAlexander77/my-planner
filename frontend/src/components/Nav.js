import React from 'react';
import { BsPlusLg, BsBoxArrowRight } from 'react-icons/bs';
import '../styles/components/Nav.css';

function Nav() {
    return(
        <div className="nav">
            <h1 className="nav-title">MyPlanner</h1>
            <div className="nav-menu">  
                <button className="nav-add-task-btn">
                    <BsPlusLg className="nav-add-task-icon"/>Add Task
                </button>
                <button className="nav-logout-btn">
                    Logout<BsBoxArrowRight className="nav-logout-icon"/>
                </button>
            </div>  
        </div>
    );
}

export default Nav;