import './App.css'
import headerImage from './assets/UF.jpg'
import Calendar from './Calendar'

function App() {
  return (
    <>
      <div className="header">
        <img src={headerImage} alt="Image of the Unoversity of Florida campus" className="headerImage" />
        <h1>University of Florida CS Events!</h1>
        <h2>Here you can find all the events on the campus for you to learn more about Computer Science</h2>
      </div>
      <div className="content">
        <h3>Upcoming Events:</h3>
        <Calendar />
      </div>
    </>
  )
}

export default App
