import './App.css'
import Header from './components/Header'
import Log from './components/Log'

export default function App() {

  return (
    <>
      <Header/>
      <Log
        locationImg="src/assets/moucha.jpg"
        locationAlt="image of location"
        markerImg="src/assets/location-marker.png"
        country="Djibouti"
        mapslink="https://maps.app.goo.gl/EezsBUTTASs7wKLHA"
        locationName="Moucha Island"
        date="November 2024"
        text="My first visit to a 'real' island. The U.K. is not what comes to mind when you envision an island is it? Spent 2 days in this idyllic tropical paradise whilst visiting some family. But watch out for sharks!"
      />
    </>
  )
}


