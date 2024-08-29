import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Train from './components/Train'
// import Bus from './components/Bus'

const projectName = 'Content Management System'
const projectDescription = 'Project Development by React + Vue'
const date = new Date().getFullYear()
const countryName = 'Bangladesh'
const countryCapital = 'Dhaka'

const busName = 'Green Line'
const busRoute = 'Dhaka - Khulna'

function Bus() {
  return <div className='bus'>
    <h2 className='busName'>Bus Name : {busName} </h2>
    <p className='busRoute'>Bus Route : {busRoute}</p>
  </div>

}

const headingStyle = {
  backgroundColor: "purple",
  color: 'white',
  textAlign: "center",
  padding: '15px'
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Management System</h1>
        <h2>Developed in React</h2>

        <h3 style={{ color: 'red', fontSize: "3rem" }} >Project Name: {projectName}</h3>
        <h2 style={headingStyle} >Description: {projectDescription}</h2>
        <h3 className="demoHeadingStyle" >Time: {date} </h3>
        <h3 className="demoHeadingStyleDate" >Month day: {new Date().getDate()} </h3>

        <div className='card'>
          <h2 className='countryName'>Country Name: {countryName} </h2>
          <p className='countryCapital'>Capital Name: {countryCapital}</p>
        </div>
        < Bus />
        < Bus />

        <Train />

      </div>

    </>
  )
}

export default App
