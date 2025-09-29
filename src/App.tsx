import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript</h1>
      
      <div className="app-content">
        <div className="original-demo">
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </div>

        <div className="components-showcase">
          <Card 
            title="🚀 Modern React" 
            description="This app demonstrates modern React with TypeScript, featuring component composition and CSS modules."
            icon="⚛️"
          >
            <Counter initialValue={0} step={1} />
          </Card>

          <Card 
            title="🎨 Styled Components" 
            description="Beautiful, responsive components with CSS animations and hover effects."
            icon="✨"
          >
            <Counter initialValue={10} step={5} />
          </Card>

          <Card 
            title="⚡ Vite Development" 
            description="Lightning-fast development with Hot Module Replacement (HMR) and instant updates."
            icon="🔥"
          >
            <div style={{ textAlign: 'center', color: '#646cff' }}>
              <strong>Build Tool: Vite</strong><br />
              <small>Fast, modern, and efficient</small>
            </div>
          </Card>
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App