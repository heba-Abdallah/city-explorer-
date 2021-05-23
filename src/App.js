import React from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      searchQuery: '',
      locData: '',
      displayMap: false,
    }
  }
  getLocation = async (e) => {
    e.preventDefault();

    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.8a6d5abe582c530444a1a198f0341145&q=${this.state.searchQuery}&format=json`

    let locResult = await axios.get(locUrl);
    console.log('hi', locResult.data);


    for (let i = 0; i < locResult.data.length; i++) {
      this.setState({
        locData: locResult.data[i],
        displayMap: true,
      })
      console.log('i', locResult.data[i]);

    }
    console.log('hello', this.state.locData);
  }

  updateSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
    console.log('heba', this.state.searchQuery);
  }

  render() {
    return (
      <>

        <h1>City Explorer</h1>
        <Form onSubmit={this.getLocation}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Add a City</Form.Label>
            <Form.Control type="text" placeholder="Add a City" onChange={this.updateSearchQuery} />

          </Form.Group>

          <Button variant="primary" type="submit">
            Explore!
           </Button>
        </Form>

        {this.state.displayMap &&

            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.8a6d5abe582c530444a1a198f0341145&center=${this.state.locData.lat},${this.state.locData.lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>`} alt='' />
          <Card.Body>
            <Card.Title>{this.state.locData.display_name}</Card.Title>
          </Card.Body>
        </Card>

        }
      

      </>
    )
  }

}
export default App;