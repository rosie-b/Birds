import React from 'react'
import birds from '../public/data/birds'

const BirdProfile = (props) =>  {

	console.log(props)
	const name = props.bird.match.params.bird 
	console.log(name)
    const findBird = birds.find((bird)=>{
        
       if (name == bird.name) {
           return bird.name
       }

    })
console.log(findBird.sound)
    // const sound = findBird.sound
    // const playSound = () =>{
    //     sound.play();
    // }
    return (
        <React.Fragment>
            <div className="overbody">
				<div className="content">
					<div className="pagehead">
						<h1>Birds</h1>
					</div>
					<div className="birdprofile">
						<div className='upperContainer'>
                        <div className="birdimg" id="hvr-grow">
                           
                            {/* <audio id="myAudio">
                                <source src={findBird.sound} type="audio/mpeg"/>
                            </audio> */}

							<img className="birdpicture" src={findBird.image_url} alt="birdpic" />
                        
                      
                        </div>
                        <div>
                            <div className="birdName">
                            <h4>{findBird.name}</h4>
                            </div>
                            <div className="instructions">
                            Click my picture to hear me speak!
                        </div>
                        </div>
                        
                    	</div>
                      
                        <div className="birdDescription">
                            <p>{findBird.description}</p>
                            <p>Status: {findBird.status}</p>
                        </div>
                    </div>
				</div>		
			</div>
        </React.Fragment>
    )
}





export default BirdProfile