import React from 'react'
import UserCard from './Components/UserCard.jsx'
import men from './assets/men.jpeg'
import article from './assets/article.jpg'
import black from './assets/black.jpeg'
import './App.css'


const App = () => {
  return (
    <div className="container" >
      <UserCard name='Maharana' desc="hellow ji kasa ho sara" image={men}/>
      <UserCard name='RanaPratap'desc="Ma hu hero" image={article}/>
      <UserCard name="kuwarSingh"desc="I am millioner" image={black}/>
      


      
    </div>
  )
}

export default App
