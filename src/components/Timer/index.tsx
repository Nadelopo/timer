import React, { useState } from 'react'
import { Score } from '../Score'
import './Timer.sass'

export const Timer = () => {
  const [ms, setMs] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const setScore = (value: string, type: string) => {
    const Nvalue = Number(value.slice(0, 2))

    switch (type) {
      case 'ms':
        setMs(Nvalue)
        break
      case 's':
        setSeconds(Nvalue)
        break
      case 'm':
        setMinutes(Nvalue)
        break
      case 'h':
        setHours(Nvalue)
        break
    }
  }

  return (
    <div>
      <div className="switch">
        <button className="btn">start</button>
        <button className="btn">clear</button>
      </div>
      <div className="set">
        <div className="input">
          <input
            type="number"
            onChange={(e) => setScore(e.target.value, 'h')}
            value={hours}
            min="0"
          />
        </div>
        <div className="input">
          <input
            type="number"
            onChange={(e) => setScore(e.target.value, 'm')}
            value={minutes}
            min="0"
          />
        </div>
        <div className="input">
          <input
            type="number"
            onChange={(e) => setScore(e.target.value, 's')}
            value={seconds}
            min="0"
          />
        </div>
        <div className="input">
          <input
            type="number"
            onChange={(e) => setScore(e.target.value, 'ms')}
            value={ms}
            min="0"
          />
        </div>
      </div>
      <Score hours={hours} minutes={minutes} seconds={seconds} ms={ms} />
    </div>
  )
}
