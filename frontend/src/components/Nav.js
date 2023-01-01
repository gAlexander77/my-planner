import React from 'react';
import { BsPlusLg, BsBoxArrowRight } from 'react-icons/bs';
import '../styles/components/Nav.css';

function Nav() {
    return(
        <div className="nav">
            <h1 className="nav-title">MyPlanner</h1>
            <div className="nav-menu">  
                <button className="nav-add-task-btn">
                    <BsPlusLg className="nav-add-task-icon"/><p>Add Task</p>
                </button>
                <button className="nav-logout-btn">
                    <p>Logout</p><BsBoxArrowRight className="nav-logout-icon"/>
                </button>
            </div>  
        </div>
    );
}

export default Nav;