import { Link } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <div className='desktop-header'>
        <h1>
          UVA Web Developer Practicum
        </h1>
      </div>
      <div className='mobile-header'>
        <h3>UVA Web Developer Practicum</h3>
      </div>
      <div className='page-links'>
        <button>
          <Link to="./uva-practicum/transcript" target='_self'>
            <h2>Transcript</h2>
          </Link>
        </button>
        <button>
          <Link to="./uva-practicum/numbers" target="_self">
            <h2>2024 By The Numbers</h2>
          </Link>
        </button>
      </div>
    </>
  )
}

export default App
