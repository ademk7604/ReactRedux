import React from 'react'
import Welcome from './welcome'
const Greetings = () => {
  return (
    <div>
        <h1>Greetings Component</h1>
        <Welcome firstName="Ali" lastName="Gel"/>
        <Welcome firstName="Ayşe" lastName="Gel"/>
        <Welcome firstName="Ayşe" lastName="Gel"/>
      
    </div>
  )
}
export default Greetings