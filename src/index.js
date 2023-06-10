import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div
    style={{
      backgroundColor: 'orange',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <h1>
        Hello World from React
    </h1>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))