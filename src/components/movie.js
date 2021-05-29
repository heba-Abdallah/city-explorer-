import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';



class Movie extends React.Component {


    render() {


        return (
            <>
            {/* <CardColumns> */}
               {(this.props.setmovie.length !== 0 && this.props.display) && this.props.setmovie.map(value=>{
                   return(
                    // style={{ width: '18rem' }
                <Card  className='MovieCard'  >
                    <img variant="top" src={value.imagePath} className='image' />
                    <Card.Body>
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text className='Cssmovie'>
                            overview:   {value.overview}<br />
                        avgVotes:   {value.avgVotes}<br />
                        totalVotes:{value.totalVotes}<br />
                        popularity: {value.popularity}<br />
                        releaseDate:{value.releaseDate}<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
                   )
               })
            }
            {/* </CardColumns> */}
                {/* {(this.props.setmovie.length !== 0 && this.props.display) && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            Movies Data
                        </Card.Title>
                        <Card.Text>
                            
                            Date: {this.props.setmovie.title}<br />
                                overview: {this.props.setmovie.overview}<br />
                        avgVotes:{this.props.setmovie.avgVotes}<br />
                        totalVotes:{this.props.setmovie.totalVotes}<br />
                        imagePath:{this.props.setmovie.imagePath}<br />
                        popularity:{this.props.setmovie.popularity}<br />
                        releaseDate:{this.props.setmovie.releaseDate}<br />
                        </Card.Text>
                    </Card.Body>
                </Card>} */}

                {this.props.display === false && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            Movie Data with error: {this.props.setmovie.status}
                        </Card.Title>
                        <Card.Text>
                            {/* {this.props.setmovie.message} */}


                        </Card.Text>
                    </Card.Body>
                </Card>}

            </>
        )
    }
}

export default Movie;