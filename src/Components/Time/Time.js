import React from 'react';
import './Time.css'
const Time = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <div className=' '>
            <div className="timer-container">

                <div className="time  ">
                    <div className="clock">
                        <h1  >{timerDays}</h1>
                        <h2>Days</h2>
                    </div>
                </div>
                <div className="time  ">
                    <div className="clock">
                        <h1 >{timerHours}</h1>
                        <h2>Hours</h2>
                    </div>
                </div>
                <div className="time  ">
                    <div className="clock">
                        <h1 >{timerMinutes}</h1>
                        <h2>Minutes</h2>
                    </div>
                </div>
                <div className="time  ">
                    <div className="clock">
                        <h1 >{timerSeconds}</h1>
                        <h2>Seconds</h2>
                    </div>
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