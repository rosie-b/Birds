import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

import data from '../public/data/birds' 

class Birds extends React.Component {
    constructor(props) {
    super(props) 
        this.state = {
            
        }
        console.log(data)
        // BINDING BIZZO
}

render() {
  return (
    <div>
        <ul>
        {data.map(bird => {
            return <li><Link to={'/' + bird.name}>{bird.name}</Link></li>
        })}
        </ul>
    </div>
  )    

}
}


export default Birds 