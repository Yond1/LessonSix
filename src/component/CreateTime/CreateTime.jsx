import React, { useEffect, useState } from 'react'
import Clock from '../Clock'
import './CreateTime.css'

export const CreateTime = () => {
    const [timeZone, setTimeZone] = useState(0)
    const [nameClock, setNameClock] = useState('')
    const [clocks, setClocks] = useState([])

    const addClockHandle = () => {
        setClocks(prev => [...prev, {
            nameClock: nameClock,
            timeZone: timeZone,
        }])
    }
    const removeClock = (id) => {
        setClocks(prev => clocks.filter((item) => item.nameClock !== id))
    }

    return (
        <div className="clock-container">
            <div className="add-zone-wrapper">
                <input
                    onChange={(e) => { setNameClock(e.target.value) }}
                    type="text" className="add-zone-input" placeholder='Clock zone' />
                <input
                    onChange={(e) => { setTimeZone(e.target.value) }}
                    type="number" className="add-zone-input" placeholder='+-' />
                <button onClick={() => {
                    addClockHandle()
                }} className="add-zone-bth">Add</button>
            </div>
            <div className="clock-container-item">
                {clocks.map((item) => {
                    return <Clock removeClock={removeClock} id={item.nameClock} key={item.nameClock} nameClock={item.nameClock} timeZone={item.timeZone} />
                })}
            </div>
        </div>
    )
}

