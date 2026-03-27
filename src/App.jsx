import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <p className="count-display">Count: {count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header>
        <h1>🚀 React Beginner Toolkit</h1>
        <p>Learn React with this simple counter example!</p>
      </header>
      
      <main>
        <section className="intro">
          <h2>What is React?</h2>
          <p>
            React is a JavaScript library for building user interfaces. 
            It lets you build complex UIs from small, reusable pieces called components.
          </p>
        </section>

        <Counter />

        <section className="learn-more">
          <h2>Key React Concepts Used Here:</h2>
          <ul>
            <li><strong>useState</strong> - Hook for managing state in functional components</li>
            <li><strong>Components</strong> - Reusable UI pieces</li>
            <li><strong>JSX</strong> - JavaScript syntax extension for HTML-like code</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>Built with ❤️ for the Moringa AI Capstone Project</p>
      </footer>
    </div>
  )
}

export default App