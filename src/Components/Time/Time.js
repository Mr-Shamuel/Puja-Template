import React from 'react';
import './Time.css'
const Time = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (

        <div className="timer-container">

            <div className="time  ">
                <div className="clock">
                    <h1  >{timerDays}</h1>
                    <h3>Days</h3>
                </div>
            </div>
            <div className="time  ">
                <div className="clock">
                    <h1 >{timerHours}</h1>
                    <h3>Hours</h3>
                </div>
            </div>
            <div className="time  ">
                <div className="clock">
                    <h1 >{timerMinutes}</h1>
                    <h3>Minutes</h3>
                </div>
            </div>
            <div className="time  ">
                <div className="clock">
                    <h1 >{timerSeconds}</h1>
                    <h3>Seconds</h3>
                </div>
            </div>



        </div>



    );
};


Time.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10
}

export default Time;