import React, { useState } from 'react'
import { Stopwatch } from './components/Stopwatch'
import { Timer } from './components/Timer'

const App: React.FC = () => {
  const [isComponent, setIsComponent] = useState(false)

  return (
    <div>
      <div className="switch">
        <button className="btn" onClick={() => setIsComponent(true)}>
          stopwatch
        </button>
        <button className="btn" onClick={() => setIsComponent(false)}>
          timer
        </button>
      </div>
      {isComponent ? <Stopwatch /> : <Timer />}
    </div>
  )
}

export default App
