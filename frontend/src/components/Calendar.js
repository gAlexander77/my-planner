import React from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import '../styles/components/Calendar.css';

function Calendar(){

    function CalendarNavigator(){
        return(
            <div className="calendar-navigator-container">
                <button className="navigate-btn"><BsFillArrowLeftSquareFill/></button>
                <button className="navigate-btn"><BsFillArrowRightSquareFill/></button>
                <h1 className="navigate-dates-shown">Dec 25 - 31,2022</h1>
            </div>
        );
    }

    function CalendarKey(){
        return(
            <div className="calendar-key-container">
                <div className="key-item">To Do <div className="key-color-box" style={{backgroundColor: "#00D1FF"}}/></div>
                <div className="key-item">Completed<div className="key-color-box" style={{backgroundColor: "#D9D9D9"}}/></div>
                <div className="key-item">Past Due<div className="key-color-box" style={{backgroundColor: "#FF0000"}}/></div>
            </div>
        );
    }    

    function Task(){
        return(
            <div className="task">
                <p>Task</p>
            </div>  
        );
    }
    
    function CalendarDay({dayDate, dayOfWeek}){
        return(
            <div className="calendar-day">
                <h1 className="calendar-day-date-header">{dayDate}</h1>
                <h1 className="calendar-day-of-week-header">{dayOfWeek}</h1>
                <div className="calendar-day-tasks">
                    <Task/>
                    <Task/>
                    <Task/>
                </div>
            </div>
        );
    }

    function Calendar() {
        return(
            <div className="calendar-outer">
                <div className="calendar-inner">
                    <CalendarDay dayDate={25} dayOfWeek={"SUN"}/>
                    <CalendarDay dayDate={26} dayOfWeek={"MON"}/>
                    <CalendarDay dayDate={27} dayOfWeek={"TUE"}/>
                    <CalendarDay dayDate={28} dayOfWeek={"WED"}/>
                    <CalendarDay dayDate={29} dayOfWeek={"THU"}/>
                    <CalendarDay dayDate={30} dayOfWeek={"FRI"}/>
                    <CalendarDay dayDate={31} dayOfWeek={"SAT"}/>
                </div>
            </div>
        );
    }

    return (
        <div className="calendar">
            <div className="calendar-header">
                <CalendarNavigator/>
                <CalendarKey/>
            </div>
            <Calendar/>    
        </div>
    );
}

export default Calendar;