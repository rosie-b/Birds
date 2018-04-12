import React from 'react'
import {HashRouter as Router, Route,Link} from 'react-router-dom'

import Home from './Home'
import Birds from './Birds'
import BirdProfile from './BirdProfile'

const App = () => {

    return (
      <Router>
        <div>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/birds' component = {Birds} />
          <Route exact path='/:id' component={BirdProfile}/>
        </div>
      </Router>
    )  
  }


export default App
