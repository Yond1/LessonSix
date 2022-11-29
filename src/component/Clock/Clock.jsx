import React, { useEffect, useState } from 'react'

export const Clock = ({ timeZone, nameClock, removeClock, id }) => {

    const [time, setTime] = useState({})

    const rotate = () => {
        const date = new Date()
        let clock;
        const minutesDeg = date.getMinutes() * 6
        const secondsDeg = date.getSeconds() * 6
        const hourDeg = (date.getUTCHours() + timeZone) * 15
        console.log(id)
        return clock = {
            minutesDeg: minutesDeg,
            secondsDeg: secondsDeg,
            hourDeg: hourDeg
        }

    }


    useEffect(() => {
        let interval = setInterval(() => {
            setTime(rotate())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [nameClock])

    const timeClock = {
        hour: { transform: `rotate(${time.hourDeg}deg)` },
        minutes: { transform: `rotate(${time.minutesDeg}deg)` },
        seconds: { transform: `rotate(${time.secondsDeg}deg)` },
    }

    return (
        <div className="clock-wrapper">
            <div className="clock">
                <div className="clock-title">{nameClock}</div>
                <div className="wrap">
                    <span className="hour" style={timeClock.hour} ></span>
                    <span className="minute" style={timeClock.minutes}></span>
                    <span className="second" style={timeClock.seconds}></span>
                    <span className="dot"></span>
                </div>
            </div>
            <span onClick={() => removeClock(id)}>X</span>
        </div>
    )
}
