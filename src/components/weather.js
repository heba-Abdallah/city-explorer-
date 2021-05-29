import React from 'react';
import Card from 'react-bootstrap/Card';


class WeatherCard extends React.Component {

    //  constructor(props){
    //      super(props);
    //      this.state={
    //          weatherArr:this.props.weatherData,
    //      }
    //  }
    render() {


        return (
            <>
                {this.props.display && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            Weather Data
                        </Card.Title>
                        <Card.Text>
                            {/* {console.log(this.state.weatherData)}  */}
                            Date: {this.props.weatherData[0].date}<br />
                            Description: {this.props.weatherData[0].description}<br />
                            Date: {this.props.weatherData[1].date}<br />
                            Description: {this.props.weatherData[1].description}<br />
                            Date: {this.props.weatherData[2].date}<br />
                            Description: {this.props.weatherData[2].description}<br />

                        </Card.Text>
                    </Card.Body>
                </Card>}
                {this.props.display === false && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            Weather Data with error: {this.props.weatherData.status}
                        </Card.Title>
                        <Card.Text>
                            {this.props.weatherData.data}


                        </Card.Text>
                    </Card.Body>
                </Card>}

            </>
        )
    }
}

export default WeatherCard;