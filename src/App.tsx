import React, { useEffect, useState } from 'react'

interface lap {
  id: number
  ms: number
  seconds: number
  minutes: number
  hours: number
}

function App() {
  const [ms, setMs] = useState(0)
  const [seconds, setSeconds] = useState(58)
  const [minutes, setMinutes] = useState(59)
  const [hours, setHours] = useState(0)
  const [activeTimer, setActiveTimer] = useState(true)
  const [laps, setLaps] = useState<lap[]>([])

  useEffect(() => {
    if (activeTimer) {
      window.setTimeout(() => setMs(ms + 1), 10)
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
    }
  }, [ms, activeTimer])

  const stopStartTimer = () => {
    if (activeTimer) setActiveTimer(false)
    else setActiveTimer(true)
  }

  const reset = () => {
    setMs(0)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  const clearLaps = () => setLaps([])

  const restart = () => {
    reset()
    setActiveTimer(true)
  }

  const addLap = () => {
    const newLaps = [...laps]
    newLaps.push({
      id: laps.length,
      ms,
      seconds,
      minutes,
      hours,
    })
    setLaps(newLaps)
  }
  return (
    <div>
      <div className="actions">
        <button className="btn" onClick={stopStartTimer}>
          {activeTimer ? 'stop' : 'start'}
        </button>
        <button className="btn" onClick={addLap}>
          lap
        </button>

        <button className="btn" onClick={clearLaps}>
          clear laps
        </button>
        <button className="btn" onClick={restart}>
          restart
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
      <div className="laps">
        {laps.map((l) => (
          <div key={l.id} className="lap">
            <div>
              {l.hours < 10 && 0}
              {l.hours}
            </div>
            <div>:</div>
            <div>
              {l.minutes < 10 && 0}
              {l.minutes}
            </div>
            <div>:</div>
            <div>
              {l.seconds < 10 && 0}
              {l.seconds}
            </div>
            <div>:</div>
            <div>
              {l.ms < 10 && 0}
              {l.ms}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
