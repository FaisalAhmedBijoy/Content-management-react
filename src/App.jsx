import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const projectName = 'Content Management System'
const projectDescription = 'Project Development by React + Vue'
const date = new Date().getFullYear()
const headingStyle ={
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

        <h3 style ={{color : 'red', fontSize : "3rem"}} >Project Name: {projectName}</h3>
        <h2 style ={headingStyle} >Description: {projectDescription}</h2>
        <h3 className = "demoHeadingStyle" >Time: {date} </h3>

 
      </div>
     
    </>
  )
}

export default App
