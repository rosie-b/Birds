import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Coverflow from 'react-coverflow'
import data from '../public/data/birds'
import { StyleRoot } from 'radium';

const Birds = function () {
    /* do you want */

    return < div>
        <StyleRoot>
            <Coverflow
                displayQuantityOfSide={2}
                navigation
                infiniteScroll
                enableHeading
                media={{
                    '@media (max-width: 900px)': {
                        width: '600px',
                        height: '300px'
                    },
                    '@media (min-width: 900px)': {
                        width: '960px',
                        height: '600px'
                    }
                }}
            >
                {data.map(bird => {
                    return (
                        <img src={bird.image_url} alt={bird.name} data-action={'/#/birds/' + bird.name} />
                    )
                })}
            </Coverflow>
        </StyleRoot>
    </div>
}


// import React from 'react'
// import { HashRouter as Router, Route, Link} from 'react-router-dom'

// import data from '../public/data/birds' 

// class Birds extends React.Component {
//     constructor(props) {
//     super(props) 
//         this.state = {

//         }
// }

// render() {
//   return (
//     <div className = "wrapper">

//         {data.map(bird => {
//             return (
//             <div className = "birdlist">
//                 <Link to={'/birds/' + bird.name}>
//                     <img class="list-pic" src ={bird.image_url} /> 
//                     {/* {bird.name} */}
//                 </Link>
//             </div>
//             )
//         })}
//         </div>
//   )    

// }
// }


export default Birds 