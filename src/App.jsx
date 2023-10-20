import { useState } from 'react'
import HomePage from './components/HomePage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

<main className='flex-1 p-4 flex flex-col justify-center for making sure everything under
this div appears on the center of the screen
file is if we upload a file
audiostream is a live recording

basically, if no audio is available, we render out the homepage
if we do, we render FileDisplay.jsx

both setFile and setAudiosTEREAM are being passed as props to homepage*/


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }
// min-h-screen applies the background colour everywhere
  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        
      
        <Header />
        {isAudioAvailable ? (
          <FileDisplay handleAudioReset={handleAudioReset} 
          file={file} audioStream={setAudioStream}/>
        ) : (
        <HomePage setFile={setFile} setAudioStream={setAudioStream}/>)
        }
      </section>
      <h1 className='text-green-400'> hello</h1>
      <footer>

      </footer>
    </div>
    /*<>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>*/
  )
}

export default App
