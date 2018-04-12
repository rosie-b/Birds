import React from 'react'
import birds from '../public/data/birds'

const BirdProfile = (props) => {
    const name = props.match.params.bird 
    const findBird = birds.find((bird)=>{
        
       if (name == bird.name.toLowerCase()) {
           return bird.name
       }

    })
    console.log(findBird)
    return (
        <React.Fragment>
            <div className="overbody">
				<div className="content">
					<div className="pagehead">
						<h1>Birds</h1>
					</div>
					<div className="birdprofile">
						<div className="birdimg">
							<img className="birdpicture" src={findBird.image_url} alt="birdpic"/>
						</div>
                        <p className="birdDescription">{findBird.name}</p>
						<p>{findBird.description}</p>
					</div>
				</div>		
			</div>
        </React.Fragment>
    )
}






export default BirdProfile