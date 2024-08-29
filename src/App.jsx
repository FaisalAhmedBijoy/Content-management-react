import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Train from './components/Train'
import Air from './components/Air'
// import Bus from './components/Bus'
import Data from './data.json'
import UniqueListGenerator from './components/UniqueIdGeneration'

const projectName = 'Content Management System'
const projectDescription = 'Project Development by React + Vue'
const date = new Date().getFullYear()
const countryName = 'Bangladesh'
const countryCapital = 'Dhaka'

const busName = 'Green Line'
const busRoute = 'Dhaka - Khulna'

let airNamesAndRoutes =[]
for (let i=0; i<Data.length; i++) {
  airNamesAndRoutes.push(<Air airName={Data[i].airName} airRoute = {Data[i].airRoute} /> )
  
}

let airItemsMaps = Data.map((item, index) => <Air  key={index} airName={item.airName} airRoute={item.airRoute} /> ); 

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
        <Train />

        <Air airName="NovoAir" airRoute="Dhaka - Chittagong"/>
        <Air airName={Data[0].airName} airRoute={Data[0].airRoute} />
        <Air airName={Data[1].airName} airRoute={Data[1].airRoute} />
        <Air />

        <h3> International Air Flight</h3>
        {airNamesAndRoutes}

        <h3>Flight by Map</h3>
        {airItemsMaps}

        <h3>Flight by Direct Map</h3>

        {Data.map((item, index) => <Air  key={index} airName={item.airName} airRoute={item.airRoute} /> )} 
        
        <h4>Unique List Generation</h4>
        < UniqueListGenerator />


      </div>

    </>
  )
}

export default App
