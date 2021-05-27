import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


let serverRoute = process.env.REACT_APP_SERVER;
console.log('hi',serverRoute);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      searchQuery: '',
      locData: '',
      displayMap: false,
      errorMessage: false,
      cityInfo: {},
      weatherData: [],
      showWeather: false,
    }
  }
  getLocation = async (e) => {
    e.preventDefault();



    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.8a6d5abe582c530444a1a198f0341145&q=${this.state.searchQuery}&format=json`

    try {
      let locResult = await axios.get(locUrl);
      // console.log('hi', locResult.data);


      for (let i = 0; i < locResult.data.length; i++) {
        this.setState({
          locData: locResult.data[i],
          displayMap: true,
        })
        // console.log('i', locResult.data[i]);

      }
      // console.log('hello', this.state.locData);
    }
    catch {
      this.setState({
        displayMap: false,
        errorMessage: true,
      })
    }
    console.log('serverRoute', serverRoute);
    try {
      const url = `${serverRoute}/getLocation?city_name=${this.state.searchQuery}`;
      // const url = `http://localhost:3001/getLocation?city_name=Amman`;
      let infoData = await axios.get(url);
      console.log('url', url);
      console.log('info', infoData.data);


      // console.log('info',weatherData);

      this.setState({
        weatherData: infoData.data,
        showWeather: true,


      })

    }
    catch (error) {
      this.setState({
        // weatherData: error.response,
        showWeather: false,
      })
      console.log('sljdfhku')
    }
  }

  updateSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
    // console.log('heba', this.state.searchQuery);
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

          <Card border="info" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.8a6d5abe582c530444a1a198f0341145&center=${this.state.locData.lat},${this.state.locData.lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>`} alt='' />
            <Card.Body>
              <Card.Title>{this.state.locData.display_name}</Card.Title>
            </Card.Body>
          </Card>

        }
        {this.state.errorMessage &&

          <Alert variant="success">
            <p>
              error in getting the data
          </p>
          </Alert>
        }
        { this.state.weatherData.map((item, idx) => {
          return <p key={idx}>{item.date} and {item.description}</p>
        })}
        <p>{this.state.item}</p>
      </>
    )
  }

}
export default App;