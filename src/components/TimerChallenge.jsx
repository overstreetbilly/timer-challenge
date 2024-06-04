import { useState, useRef } from "react";
const TimerChallenge = ({ title, targetTime }) => {
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const timer = useRef();

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerStarted(false);
            setTimerExpired(true);
        }, targetTime * 1000);
    }
    function handleStop() {
        clearTimeout(timer.current);
    }
    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Timer is running" : "Timer inactive"}
            </p>
        </section>
    );
};

export default TimerChallenge;
