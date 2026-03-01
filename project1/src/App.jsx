import './App.css'
import headerImage from './assets/UF.jpg'
import Calendar from './Calendar'

function App() {
  return (
    <>
      <div className="header">
        <div className="headerImage">
          <img src={headerImage} alt="Image of the Unoversity of Florida campus" className="headerImage" />
        </div>
        <h1>University of Florida CS Events!</h1>
        <p style={{fontSize: "24px"}} >Here you can find all the events on the campus for you to learn more about Computer Science</p>
      </div>
      <hr />
      <div className="content">
        <h2>Upcoming Events:</h2>
        <Calendar />
      </div>
    </>
  )
}

export default App
