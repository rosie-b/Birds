import React from 'react'
import birds from '../public/data/birds'

const BirdProfile = (props) => {

	console.log(props)
	const name = props.bird.match.params.bird 
	console.log(name)
    const findBird = birds.find((bird)=>{
        
       if (name == bird.name) {
           return bird.name
       }

    })
    // console.log(findBird)
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