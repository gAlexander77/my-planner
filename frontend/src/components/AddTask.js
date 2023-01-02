import React from 'react';
import { BsXLg } from 'react-icons/bs';
import '../styles/components/AddTask.css';

function AddTask(props) {

    const exitHandler = () => {
        props.setTrigger(false);
    }

    return(props.trigger) ? (
        <div className="add-task-outer">
            <div className="add-task-inner">
                <button className="add-task-exit-btn" onClick={exitHandler}><BsXLg/></button>
                <div>
                    <input className="add-task-task-input" type="text"/>
                </div>
                <div>
                    <input className="add-task-task-note-input" inputType="text"/>
                </div>
                <div>
                    <input className="add-task-due-date"/>
                </div>
            </div>
        </div>
    ):'';
}

export default AddTask;