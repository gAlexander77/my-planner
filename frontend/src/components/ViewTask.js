import React, { useState, useEffect } from 'react';
import { BsXLg } from 'react-icons/bs';
import '../styles/components/ViewTask.css';

function ViewTask(props){

    const [hasChanged, setHasChanged] = useState(false);
    const [isCompleted, setTaskIsCompleted] = useState(false);

    useEffect(() =>{
        console.log(props.taskIsCompleted)
        if(props.taskIsCompleted == 1)
            setTaskIsCompleted(true);
    },[props.trigger])

    const exitHandler = () => {
        props.setTrigger(false)
        setHasChanged(false)
    }

    const saveChangesHandler = () => {
        // API update request to set taskID's isCompleted to 1
        props.setTrigger(false);
        setHasChanged(false);
    }

    let color = ""
    switch(props.taskStatus) {
        case 'Completed':
            color = "#858585";
            break;
        case 'Past Due':
            color = "#FF0000";
            break;
        default:
            color = "#00D1FF";
    }

    const style = {backgroundColor: `${color}`};


    return(props.trigger) ?(
        <div className="view-task-outer">
            <div className="view-task-inner">
                <button className="view-task-exit-btn" onClick={exitHandler}><BsXLg/></button>
                <div className="view-task-status" style={style}>{props.taskStatus}</div>
                <div className="view-task-task-container">
                    {props.taskStatus === 'Completed' ? '' : <input className="view-task-checkbox" type="checkbox" onChange={(evt)=>setHasChanged(evt.target.checked)}/>}
                    <h1 className="view-task-task-name">{props.task}</h1>
                </div>
                <p className="view-task-note">{props.taskNote===null || props.taskNote === "" ? <></> : <>{props.taskNote}</>}</p>
                <div className="view-task-due-date-container">
                    <>Due:{props.taskDueDate}</>
                </div>
                {hasChanged ? <button className="view-task-save-changes-btn" onClick={saveChangesHandler}>Save Changes</button> : <></>}
            </div>   
        </div>
    ) : '';
}

export default ViewTask;