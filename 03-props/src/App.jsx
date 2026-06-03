import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Pradyumn' age={13} img="https://images.unsplash.com/photo-1775904572110-0bb48444bc53?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
      <Card user='Pranshu' age={19} img="https://images.unsplash.com/photo-1776066729006-fcdc0032c7b9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Ketan' age={18} img="https://images.unsplash.com/photo-1775531994622-9c7ec9f017c9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzMHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
      
      
    </div>
  )
}

export default App
