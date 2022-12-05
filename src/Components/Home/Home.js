import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Rewards from '../Rewards/Rewards';
import Time from '../Time/Time';
import UserProfile from '../UserProfile/UserProfile';
import UserType from '../UserType/UserType';
import './Home.css';
const Home = () => {

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;
    const startTimer = () => {
        const countDownDate = new Date("December 13,2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);

            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        })

    }

    useEffect(() => {
        startTimer()
    })


    return (
        <div className='home '>
            <Header></Header>
            <div className="main">
                <Time
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                ></Time>
                <Category></Category>
                <UserType></UserType>

                {/* <Profile></Profile> */}

                <UserProfile></UserProfile>

            </div>
            <Rewards></Rewards>
        </div>
    );
};

export default Home;