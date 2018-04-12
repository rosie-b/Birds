import React from 'react'
import data from '../public/data/birds'

const BirdProfile = ({match}) => {
    const {bird} = match.params

    return (
        <React.Fragment>
            <div className="overbody">
				<div className="content">
					<div className="pagehead">
						<h1>Birds</h1>
					</div>
					<div className="birdprofile">
						<div className="birdimg">
							<p><img src="bird.jpg" alt="birdpic"/></p>
						</div>
						<h5>I am information about this bird. Tweet.</h5>
					</div>
				</div>		
			</div>
        </React.Fragment>
    )
}






export default BirdProfile