import React, { useState, useEffect } from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import '../styles/components/Calendar.css';

import data from './data';

function Calendar(props){

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [week, setWeek] = useState(0)
    const [dates, setDates] = useState([]);
    const [tasks, setTask] = useState(data);
    
    const date = (x) => {
        return (new Date(Date.now() + x * 24 * 60 * 60 * 1000));
    }

    const setDays = (x) => {
        let newDates= []
        let today = date(x).getDay();
        let j = today * -1
        for(let i=0;i<7;i++){
            console.log(`${days[today]} ${today} ${date(x).getDate()}`);
            console.log(date(j+i+x));
            console.log(`${date(j+i+x).getMonth()+1}-${date(j+i+x).getDate()}-${date(j+i+x).getFullYear()}`);
            let fullDate = `${date(j+i+x).getMonth()+1}-${date(j+i+x).getDate()}-${date(j+i+x).getFullYear()}`
            newDates.push({
                        month: months[date(j+i+x).getMonth()],
                        dayDate: date(j+i+x).getDate(),
                        year: date(j+i+x).getFullYear(),
                        dayOfWeek: days[i],
                        fullDate: fullDate});
            console.log(newDates)
            
        }
        setDates(newDates)
    }

    useEffect(() => {
        /*console.log(days[0])
        console.log(days[date(0).getDay()])
        console.log(date(0).getDate())
        console.log(date(0).getMonth()+1)
        console.log(date(0).getFullYear())*/

        console.log(date(0).getDay())
        setDays(week)

    },[week])

    function CalendarNavigator(){

        const back = () => {
            setWeek(week-7)
        }

        const forward = () => {
            setWeek(week+7)
        }

        const display = `${dates[0].month} ${dates[0].dayDate} - ${dates[6].dayDate}, ${dates[6].year}`
        const display2 = `${dates[0].month} ${dates[0].dayDate} - ${dates[6].month} ${dates[6].dayDate}, ${dates[6].year}`

        return(
            <div className="calendar-navigator-container">
                <button className="navigate-btn" onClick={back}><BsFillArrowLeftSquareFill/></button>
                <button className="navigate-btn" onClick={forward}><BsFillArrowRightSquareFill/></button>
                <h1 className="navigate-dates-shown">{dates[0].month===dates[6].month ? <>{display}</> : <>{display2}</>}</h1>
            </div>
        );
    }

    function CalendarKey(){
        return(
            <div className="calendar-key-container">
                <div className="key-item">To Do <div className="key-color-box" style={{backgroundColor: "#00D1FF"}}/></div>
                <div className="key-item">Completed<div className="key-color-box" style={{backgroundColor: "#858585"}}/></div>
                <div className="key-item">Past Due<div className="key-color-box" style={{backgroundColor: "#FF0000"}}/></div>
            </div>
        );
    }    

    function Task({task, note, date, isCompleted}){
        
        const now = new Date
        const todaysDate = `${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()}`
        let todaysDateValues = todaysDate.split('-');
        let taskDateValues = date.split('-');

        let color = "";
        let line = "";
        let status = "";
        if (isCompleted == 1){
            // Grey
            color = "#858585";
            line = "line-through";
            status = "Completed";
        }
        else{
            // Blue
            color = "#00D1FF";
            status = "To Do";
            if(Number(taskDateValues[2]) < Number(todaysDateValues[2])){
                // red
                color = "#FF0000";
                status = "Past Due";
            }
            if(Number(taskDateValues[0]) < Number(todaysDateValues[0])){
                // red
                color = "#FF0000";
                status = "Past Due";
            }
            if(Number(taskDateValues[1]) < Number(todaysDateValues[1]) && Number(taskDateValues[0]) <= Number(todaysDateValues[0])){
                // red
                color = "#FF0000";
                status = "Past Due";
            }
        }

        const style = {backgroundColor: `${color}`, textDecoration: `${line}`};
        
        const viewTaskHandler = () => {
            props.setTask(task)
            props.setTaskNote(note)
            props.setTaskDueDate(date)
            props.setTaskIsCompleted(isCompleted)
            props.setTaskStatus(status)
            props.setViewTask(true)
        }

        return(
            <button className="task" style={style} onClick={viewTaskHandler}>
                <>{task}</>
            </button>  
        );
    }
    
    function CalendarDay({dayDate, dayOfWeek, fullDate}){
        
        const now = new Date
        const todaysDate = `${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()}`

        const filteredTasks = tasks.filter(task => 
            task.dueDate.includes(fullDate)
        );

        const blue = {backgroundColor: "#00D1FF"};
        
        let fixBorder = {borderRightWidth: "0px"}
        
        if(dayOfWeek === "SAT"){
            fixBorder = {borderRightWidth: "1px"}
        }

        return(
            <div className="calendar-day">
                <h1 className="calendar-day-date-header">{dayDate}</h1>
                <h1 className="calendar-day-of-week-header">{dayOfWeek}</h1>
                <div className="calendar-day-tasks" style={fixBorder}>
                    {todaysDate === fullDate ? 
                        <div className="calendar-day-tab" style={blue}/> :
                        <div className="calendar-day-tab"/>}
                    {filteredTasks.map((task, index)=>{
                        return(
                            <Task
                                key = {index}
                                task={task.task}
                                note = {task.note}
                                date={task.dueDate}
                                isCompleted={task.isCompleted}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }

    function Calendar() {
        return(
            <div className="calendar-outer">
                <div className="calendar-inner">
                    {dates.map((date, index)=>{
                        return(
                            <CalendarDay
                                key = {index}
                                dayDate={date.dayDate}
                                dayOfWeek={date.dayOfWeek}
                                fullDate = {date.fullDate}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="calendar">
            <div className="calendar-header">
                {dates[6]===undefined ? '': <CalendarNavigator/>}
                {dates[6]===undefined ? '': <CalendarKey/>}
            </div>
            {dates[6]===undefined ? '': <Calendar/> }
        </div>
    );
}

export default Calendar;