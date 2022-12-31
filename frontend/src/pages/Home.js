import React from 'react';
import Nav from '../components/Nav';
import Calendar from '../components/Calendar';
import '../styles/pages/Home.css';

function Home(){
    return(
        <div className="home-page">
            <Nav/>
            <Calendar/>
        </div>
    );
}

export default Home;