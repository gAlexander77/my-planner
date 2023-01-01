import React, { useState } from 'react';
import Nav from '../components/Nav';
import Calendar from '../components/Calendar';
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

    const [addTask, setAddTask] = useState(false);

    return(
        <div className="home-page">
            <Nav/>
            <Calendar/>
        </div>
    );
}

export default Home;