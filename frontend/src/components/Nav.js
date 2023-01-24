import React from 'react';
import { BsPlusLg,} from 'react-icons/bs';
import '../styles/components/Nav.css';

function Nav(props) {
    

    const addTaskHandler = () => {
        props.setAddTask(true);
    }

    return(
        <div className="nav">
            <h1 className="nav-title">MyPlanner</h1>
            <div className="nav-menu">  
               <button className="nav-add-task-btn" onClick={addTaskHandler}>
                    <BsPlusLg className="nav-add-task-icon"/><p>Add Task</p>
                </button>
            </div>  
        </div>
    );
}

export default Nav;