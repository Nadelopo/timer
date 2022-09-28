import React from 'react'

interface IScore {
  hours: number
  minutes: number
  seconds: number
  ms: number
}

export const Score: React.FC<IScore> = ({ hours, minutes, seconds, ms }) => {
  return (
    <div className="score">
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
      <div className="numbers numbers__ms">
        {ms < 10 && <div className="number">0</div>}
        <div className="number">{ms}</div>
      </div>
    </div>
  )
}
