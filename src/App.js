import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
    <>

        <h1>City Explorer</h1>
        <form>
          <input type='text' placeholder='add a city' />
          <input type='submit' value='Explore!' />
        </form>

  </>
    )
}
}
export default App;