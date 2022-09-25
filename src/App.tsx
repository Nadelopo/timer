import React, { useEffect, useState } from 'react'
// const { log } = console
function App() {
  const [ms, setMs] = useState(0)
  const [seconds, setSeconds] = useState(58)
  const [minutes, setMinutes] = useState(59)
  const [hours, setHours] = useState(0)

  const [stateTime, setStateTime] = useState(0)

  useEffect(() => {
    setStateTime(window.setTimeout(() => setMs(ms + 1), 10))
    if (ms == 100) {
      setSeconds((s) => s + 1)
      setMs(0)
    }
    if (seconds === 60) {
      setMinutes((m) => m + Math.floor(seconds / 60))
      setSeconds(0)
    }
    if (minutes === 60) {
      setHours((h) => h + Math.floor(minutes / 60))
      setMinutes(0)
    }
  }, [ms])

  const stopStartTimer = () => {
    if (stateTime) {
      clearTimeout(stateTime)
      setStateTime(0)
    } else setMs((ms) => ms + 1)
  }

  return (
    <div>
      <div className="actions">
        <button className="btn" onClick={stopStartTimer}>
          {stateTime ? 'pause' : 'start'}
        </button>
      </div>
      <div className="timer">
        <div className="numbers">
          {hours < 10 && <div className="number">0</div>}
          <div className="number">{hours}</div>
        </div>
        <div>:</div>
        <div className="numbers">
          {minutes < 10 && <div className="number">0</div>}
          <div className="number">{minutes}</div>
        </div>
        <div>:</div>
        <div className="numbers">
          {seconds < 10 && <div className="number">0</div>}
          <div className="number">{seconds}</div>
        </div>
        <div>:</div>
        <div className="numbers">
          {ms < 10 && <div className="number">0</div>}
          <div className="number">{ms}</div>
        </div>
      </div>
    </div>
  )
}

export default App
