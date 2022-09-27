import React, { useEffect, useState } from 'react'

interface lap {
  id: number
  ms: number
  seconds: number
  minutes: number
  hours: number
}

function App() {
  const [isMount, setIsMount] = useState(false)

  const [ms, setMs] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [laps, setLaps] = useState<lap[]>([])

  const [isInterval, setIsInterval] = useState(0)

  const callInterval = () => {
    setIsInterval(window.setInterval(() => setMs((ms) => ms + 1), 10))
  }

  useEffect(() => {
    if (isMount) {
      callInterval()
    }
    setIsMount(true)
  }, [isMount])

  useEffect(() => {
    if (ms === 100) {
      setSeconds(seconds + 1)
      setMs(0)
    }
    if (seconds === 60) {
      setMinutes(minutes + 1)
      setSeconds(0)
    }
    if (minutes === 60) {
      setHours(hours + 1)
      setMinutes(0)
    }
  }, [ms])

  const stopStartTimer = () => {
    if (isInterval) {
      clearInterval(isInterval)
      setIsInterval(0)
    } else callInterval()
  }

  const restart = () => {
    setMs(0)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
    clearInterval(isInterval)
    setIsInterval(0)
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
          {isInterval ? 'stop' : 'start'}
        </button>
        <button className="btn" onClick={addLap}>
          lap
        </button>

        <button className="btn" onClick={() => setLaps([])}>
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
