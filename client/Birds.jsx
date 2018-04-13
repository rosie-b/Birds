import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

import data from '../public/data/birds' 

class Birds extends React.Component {
    constructor(props) {
    super(props) 
        this.state = {
            
        }
        // console.log(data)
        // BINDING BIZZO
}

render() {
  return (
    <div className = "wrapper">

        {data.map(bird => {
            return (
            <div className = "birdlist">
                <Link to={'/birds/' + bird.name}>
                    <img class="list-pic" src ={bird.image_url} /> 
                    {/* {bird.name} */}
                </Link>
            </div>
            )
        })}
        </div>
  )    

}
}


export default Birds 