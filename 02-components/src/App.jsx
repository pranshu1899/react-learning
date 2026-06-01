import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Pranshu Samadhiya</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, ratione!</p>
      </div>
      <Navbar />
      {Card()}  {/* variable ko print karne ke liye hum usko curly braces me likhte hai */}
      <Card />  
    </div>
  )
}

export default App
