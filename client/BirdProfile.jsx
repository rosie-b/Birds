import React from 'react'
import birds from '../public/data/birds'
import Sound from 'react-sound'
import {Link} from 'react-router-dom'

class BirdProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false
        }
        this.startPlaying = this.startPlaying.bind(this)
    }

    //console.log(props)
    startPlaying() {
        this.setState({playing: !this.state.playing})
        // setTimeout(() => this.setState({playing: false}), 5000)
    }

    render() {
        const name = this.props.bird.match.params.bird
        //console.log(name)
        const findBird = birds.find((bird) => {

            if (name == bird.name) {
                return bird.name
            }

        })
        console.log(this.state.playing)
        return (
            <React.Fragment>
                <div className="overbody">
                    <div className="content">
                        <div className="pagehead">
                            <h1>Birds</h1>
                        </div>
                        <div className="birdprofile">
                            <div className='upperContainer'>
                                <div className="birdimg" id="hvr-grow" onClick={this.startPlaying}>


                                    {this.state.playing && <Sound url={findBird.sound} playStatus={Sound.status.PLAYING} />}
                                    <img className="birdpicture" src={findBird.image_url} alt="birdpic" />
                                

                                </div>
                                <div>
                                    <div className="birdName">
                                        <h4>{findBird.name} </h4>
                                       
                                    </div>
                                    <div className="instructions">
                                    {this.state.playing
                                        ? '▋▋'
                                        : '▶'
                                    } Click my picture!
                        </div>
                                </div>

                            </div>

                            <div className="birdDescription">
                                <p>{findBird.description}</p>
                                <p>Status: {findBird.status}</p>
                                <Link to={'/birds'}>Back</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}








export default BirdProfile