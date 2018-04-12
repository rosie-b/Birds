import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <h2 className="welcome">Haere Mai! Welcome friends!</h2>
        <h1 className="title">Birds of EDA</h1>
        <Link to = {'/birds'}><button type = "button">See them birds innit</button></Link>
    </div>
  )    
}


export default Home 