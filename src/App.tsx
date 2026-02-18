import { Link } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <h1>
          UVA Web Developer Practicum
        </h1>
      </div>
      <div className='page-links'>
        <button>
          <Link to="./uva-practicum/transcript" target='_self'>
            <h1>Transcript</h1>
          </Link>
        </button>
        <button>
          <Link to="./uva-practicum/numbers" target="_self">
            <h1>2024 By The Numbers</h1>
          </Link>
        </button>
      </div>
    </>
  )
}

export default App
