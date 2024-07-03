import React, { useEffect, useRef, useState } from 'react'
import './CountDownTimer.css'
function CountDownTimer() {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSecond, setTimerSecond] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const coutDownDate = new Date('oct 29 2024 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = coutDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance <= 0) {
                // stop timer
                clearInterval(interval.current)
            } else {
                // update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSecond(seconds)
            }
        }, 1000)
    }


    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return (
        <div className=' coutDown d-flex align-items-center gap-3  text-center mb-5'>
            <div className='timer'>
                <span className='fw-bold fs-5'>{timerDays < 10 ? `0${timerDays}` : timerDays}</span>
                <p className='text-muted'>Day</p>
            </div>
            <div className='timer'>
                <span className='fw-bold fs-5'>{timerHours < 10 ? `0${timerHours}` : timerHours}</span>
                <p className='text-muted'>Hrs</p>
            </div>
            <div className='timer'>
                <span className='fw-bold fs-5'>{timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}</span>
                <p className='text-muted'>Min</p>
            </div>
            <div className='timer'>
                <span className='fw-bold fs-5'>{timerSecond < 10 ? `0${timerSecond}` : timerSecond}</span>
                <p className='text-muted'>Sec</p>
            </div>
        </div>
    )
}

export default CountDownTimer
