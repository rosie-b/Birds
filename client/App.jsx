import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      birds: [
        {id: 1, name: 'Kokako', description: 'Brave'},
        {id: 2, name: 'Kea', description: 'Cheeky'},
        {id: 3, name: 'Kiwi', description: 'Shy'}
      ]
    }
   
  }

  render() {
    console.log(this.state)
    return <div>
      <h1>Birds</h1>
      <hr />
      <p>Here they are</p>
    </div>
  }
}

export default App
