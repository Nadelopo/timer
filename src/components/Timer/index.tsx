import React, { useEffect, useState } from 'react'
import { Score } from '../Score'
import './Timer.sass'

export const Timer = () => {
  const [isInterval, setIsInterval] = useState(0)
  const [showInputs, setShowInputs] = useState(true)

  const [ms, setMs] = useState(78)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(1)
  const [hours, setHours] = useState(0)

  const callTimer = () => {
    setIsInterval(window.setInterval(() => setMs((ms) => ms - 1), 10))
  }

  const setScore = (value: string, type: string) => {
    const Nvalue = Number(value)
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

  useEffect(() => {
    if (!ms && !seconds && !minutes && !hours) {
      clearInterval(isInterval)
      setShowInputs(true)
      setIsInterval(0)
    } else {
      if (ms === 0 || ms === -1) {
        setMs(99)
        setSeconds(seconds - 1)
      }

      if (minutes) {
        if (seconds === 0) {
          setSeconds(60)
          setMinutes(minutes - 1)
        }
      }

      if (hours) {
        if (minutes === 0) {
          setMinutes(60)
          setHours(hours - 1)
        }
      }
      setShowInputs(false)
    }
  }, [ms])

  const stopStartStopwatch = () => {
    if (isInterval) {
      clearInterval(isInterval)
      setIsInterval(0)
    } else if (ms || seconds || minutes || hours) callTimer()
  }

  const clear = () => {
    setMs(0)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
    clearInterval(isInterval)
    setIsInterval(0)
  }

  return (
    <div>
      <div className="switch">
        <button className="btn" onClick={stopStartStopwatch}>
          {isInterval ? 'stop' : 'start'}
        </button>
        <button className="btn" onClick={clear}>
          clear
        </button>
      </div>
      {showInputs && (
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
              max="60"
            />
          </div>
          <div className="input">
            <input
              type="number"
              onChange={(e) => setScore(e.target.value, 's')}
              value={seconds}
              min="0"
              max="60"
            />
          </div>
          <div className="input">
            <input
              type="number"
              onChange={(e) => setScore(e.target.value, 'ms')}
              value={ms}
              min="0"
              max="99"
            />
          </div>
        </div>
      )}
      <Score hours={hours} minutes={minutes} seconds={seconds} ms={ms} />
    </div>
  )
}
