import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home'
import Birds from './Birds'

class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   birds: [
    //     {id: 1, name: 'Kokako', description: 'Brave'},
    //     {id: 2, name: 'Kea', description: 'Cheeky'},
    //     {id: 3, name: 'Kiwi', description: 'Shy'}
    //   ]
    // }
   
  }

  render() {
    return (
      <Router>
        <div>
          <Route path = '/' component = {Home} />
          <Route path = '/birds' component = {Birds} />
        </div>
      </Router>
    )  
  }
}

export default App
