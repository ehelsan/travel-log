import './App.css'
import Header from './components/Header'
import Log from './components/Log'
import data from './data.js'

export default function App() {

  const logElements = data.map((log) => {
    return(
      <Log
        id = {log.id}
        log = {log}
      />
    )
  })

  return (
    <>
      <Header/>
      <main className='logContainer'>
        {logElements}
      </main>
    </>
  )
}


