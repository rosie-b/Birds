import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import BirdProfile from './BirdProfile'

const App = () => {
  
  return(
    <Router>
      <div>
      <Route path='/:bird' component={BirdProfile}/>
      </div>
      </Router>
  )
}

export default App
