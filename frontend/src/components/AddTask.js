import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material'
import { BsXLg } from 'react-icons/bs';
import '../styles/components/AddTask.css';

function AddTask(props) {

    const [cantAddTask, setCantAddTask] = useState(true);
    const [textFieldDate, setTextFieldDate] = useState('');

    const [task, setTask] = useState('');
    const [note, setNote] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        let token = textFieldDate.split('-');
        for (let i = 0; i < token.length; i++) {
            token[i] = token[i].replace(/^0+/, '');
        }
        let date = token[1]+'-'+token[2]+'-'+token[0]
        setDueDate(date);
        console.log(dueDate);
    },[textFieldDate])

    useEffect(() => {
        const check = dueDate.split('-');
        if (dueDate.length > 1 && task.length > 1 && check[0] !== 'undefined') {
            setCantAddTask(false);
        }
        else {
            setCantAddTask(true);
        }
    },[ task, note, dueDate ]);

    const exitHandler = () => {
        props.setTrigger(false);
        setCantAddTask(true);
        setTextFieldDate('');
        setTask('');
        setDueDate('');
    }

    const taskHandler = (evt) => {
        setTask(evt.target.value);
    }

    const noteHandler = (evt) => {
        setNote(evt.target.value);
    }

    const textFieldDateHandler = (evt) => {
        setTextFieldDate(evt.target.value);
        console.log(evt.target.value);
    }

    const addTask = () => {
        console.log(dueDate);
    }

    return(props.trigger) ? (
        <div className="add-task-outer">
            <div className="add-task-inner">
                <button className="add-task-exit-btn" onClick={exitHandler}><BsXLg/></button>
                <div className="add-task-task">
                    <TextField
                        label="Task"
                        type="text"
                        value = {task}
                        onChange = {taskHandler}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="add-task-note">
                    <TextField
                        label="Note (optional)"
                        type="text"
                        value = {note}
                        onChange = {noteHandler}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="add-task-due-date">
                    <TextField
                        id="date"
                        label="Due Date"
                        type="date"
                        value = {textFieldDate}
                        onChange = {textFieldDateHandler}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        InputProps={{
                            style: {
                              width: '200px'
                            }
                        }}
                    />
                </div>
                <button disabled={cantAddTask} className="add-task-btn" onClick={addTask}>Add Task</button>
            </div>
        </div>
    ):'';
}

export default AddTask;