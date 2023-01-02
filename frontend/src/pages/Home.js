import React, { useState } from 'react';
import Nav from '../components/Nav';
import Calendar from '../components/Calendar';
import ViewTask from '../components/ViewTask';
import AddTask from '../components/AddTask';
import Logout from '../components/Logout';
import '../styles/pages/Home.css';

function Home(){

    const [viewTask, setViewTask] = useState(false);
    const [taskID, setTaskID] = useState();
    const [taskUsername, setTaskUsername] = useState();
    const [task, setTask] = useState();
    const [taskNote, setTaskNote] = useState();
    const [taskDueDate, setTaskDueDate] = useState();
    const [taskDueTime, setTaskDueTime] = useState();
    const [taskIsCompleted, setTaskIsCompleted] = useState();

    const [taskStatus, setTaskStatus] = useState();

    const [addTask, setAddTask] = useState(false);

    const [logout, setLogout] = useState(false);

    return(
        <div className="home-page">
            <Nav
                addTask = {addTask}
                setAddTask = {setAddTask}
                logout = {logout}
                setLogout = {setLogout}
            />
            <Calendar
                setViewTask = {setViewTask}
                setTaskID = {setTaskID}
                setTask = {setTask}
                setTaskUsername = {setTaskUsername}
                setTaskNote = {setTaskNote}
                setTaskDueDate = {setTaskDueDate}
                setTaskIsCompleted = {setTaskIsCompleted}

                setTaskStatus = {setTaskStatus}
            />
            <ViewTask
                trigger = {viewTask}
                setTrigger = {setViewTask}
                taskID = {taskID}
                task = {task}
                taskNote = {taskNote}
                taskDueDate = {taskDueDate}
                taskIsCompleted = {taskIsCompleted}
                setTaskIsCompleted = {setTaskIsCompleted}

                taskStatus = {taskStatus}
            />
            <AddTask
                trigger = {addTask}
                setTrigger = {setAddTask}
            />
            <Logout
                trigger= {logout}
                setTrigger = {setLogout}
            />
        </div>
    );
}

export default Home;